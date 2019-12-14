import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

import {Router} from '@angular/router';

import {DatePipe} from '@angular/common';

import Swal from 'sweetalert2';
import {CreateAppointmentPatient} from '../../../model/patient-create-appointment';
import {AppointmentService} from '../../../service/appointment.service';
import {FlashMessageService} from '../../../../shared/service/flash-message.service';

@Component({
  selector: 'app-patient-create-appointment',
  templateUrl: './patient-create-appointment.component.html',
  styleUrls: ['./patient-create-appointment.component.css']
})

export class PatientCreateAppointmentComponent implements OnInit {

  searchText;
  submitted = false;
  form: FormGroup;
  serverError = '';
  stateCtrl = new FormControl();
  getFreeTime = new FormControl();
  startTimeOfFreeSlots: string;
  send_date = new Date();
  formattedDate: any;
  appoinrmentList: Array<any>;
  timeSlotArray: Array<String> = [];
  doctorArrayList: Array<String> = [];
  doctorChamberArrayList: Array<String> = [];

  constructor(private appointmentService: AppointmentService, private router: Router,
              private flashMessageService: FlashMessageService, private datePipe: DatePipe,
              private formBuilder: FormBuilder) {
    this.send_date.setMonth(this.send_date.getMonth());
    this.formattedDate = this.send_date.toISOString().slice(0, 10);
  }

  get f() {

    return this.form.controls;
  }

  onSubmit() {

    this.submitted = true;
    if (this.form.invalid) {
      return true;
    }
    const createAppointment: CreateAppointmentPatient = new CreateAppointmentPatient();
    createAppointment.doctorId = this.form.controls['selectDoctor'].value;
    createAppointment.doctorChamber = this.form.controls['selectChamber'].value;
    createAppointment.date = this.datePipe.transform(this.form.controls['date'].value, 'yyyy-MM-dd');
    createAppointment.time = this.startTimeOfFreeSlots;
    this.appointmentService.createAppointmentByPatient(
      createAppointment.date,
      createAppointment.doctorId,
      createAppointment.doctorChamber,
      createAppointment.time).subscribe(res => {
      this.flashMessageService.showFlashMessage({
          messages: ['Appointment Create  Successfully '], dismissible: true,
          type: 'primary'
        }
      );
    }, error => {
      if (error.status === 400) {
        Swal.fire(
          'Patient account is not active yet',
          '',
          'error'
        );
      }
    });
  }

  ngOnInit() {

    this.form = this.formBuilder.group({
      stateCtrl: [''],
      patientName: [''],
      address: [''],
      age: [''],
      bloodGroup: [''],
      selectDoctor: [''],
      selectChamber: [''],
      date: [''],
      timeSlot: ['']
    });
    if (this.form.controls['date'].value === '') {
      this.form.controls['date'].setValue(this.formattedDate);
      this.fetchFreeTimeSlots(this.formattedDate);
    }
    this.fetchDoctorList();
  }

  setDateFetchFreeTimeSlots() {

    this.fetchFreeTimeSlots(this.form.controls['date'].value);
  }

  fetchFreeTimeSlots(date: string) {

    this.appointmentService.getFreeTimeSlots(this.form.controls['selectDoctor'].value, date).subscribe(res => {
      this.timeSlotArray = [];
      res.forEach(freeSlot => {
        this.timeSlotArray.push(freeSlot.startDateTime);
      });
    });
  }

  fetchDoctorList() {
    this.appointmentService.getDoctorList().subscribe(res => {
      res.forEach(doctorList => {

        this.doctorArrayList.push(doctorList);
      });
    });
  }

  onChange(doctorId) {
    this.fetchDoctorChamberList(doctorId);
  }

  fetchDoctorChamberList(doctorId: string) {
    this.doctorChamberArrayList = [];
    this.appointmentService.getDoctorChamberList(doctorId).subscribe(res => {
      res.forEach(doctorChamberList => {

        this.doctorChamberArrayList.push(doctorChamberList);
      });
    });
  }

  getFreeSlotsValue(startTime) {
    this.startTimeOfFreeSlots = startTime;
  }

  onClose() {
    /* TODO: add back task*/
  }

}
