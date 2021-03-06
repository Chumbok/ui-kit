import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AppointmentService} from '../../../service/appointment.service';
import {Router} from '@angular/router';
import {FlashMessageService} from '../../../../shared/service/flash-message.service';
import {DatePipe} from '@angular/common';
import {CreateAppointment} from '../../../model/create-appointment';


@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})

export class CreateAppointmentComponent implements OnInit {

  searchText;
  submitted = false;
  form: FormGroup;
  serverError = '';
  startTimeOfFreeSlots: string;
  send_date = new Date();
  formattedDate: any;
  appointmentList: Array<any>;
  stateCtrl = new FormControl();
  getFreeTime = new FormControl();
  timeSlotArray: Array<String> = [];
  doctorArrayList: Array<String> = [];
  doctorChamberArrayList: Array<String> = [];

  constructor(private appointmentService: AppointmentService,
              private router: Router,
              private flashMessageService: FlashMessageService,
              private datePipe: DatePipe,
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

    const createAppointment: CreateAppointment = new CreateAppointment();
    createAppointment.phoneNumber = this.stateCtrl.value;
    createAppointment.patientName = this.form.controls['patientName'].value;
    createAppointment.address = this.form.controls['address'].value;
    createAppointment.age = this.form.controls['age'].value;
    createAppointment.bloodGroup = this.form.controls['bloodGroup'].value;
    createAppointment.doctorId = this.form.controls['selectDoctor'].value;
    createAppointment.doctorChamber = this.form.controls['selectChamber'].value;
    createAppointment.date = this.datePipe.transform(this.form.controls['date'].value, 'yyyy-MM-dd');
    createAppointment.timeSlot = this.startTimeOfFreeSlots;

    this.appointmentService.createAppointment(createAppointment.phoneNumber, createAppointment.patientName,
      createAppointment.address, createAppointment.date, createAppointment.age, createAppointment.bloodGroup,
      createAppointment.doctorId, createAppointment.doctorChamber,
      createAppointment.timeSlot).subscribe(res => {
      this.router.navigate(['dentist-point/doctors/calendar-view']);
      this.flashMessageService.showFlashMessage({
          messages: ['Appointment Create  Successfully '], dismissible: true,
          type: 'primary'
        }
      );
    }, error => {
      if (error.status === 400) {
        this.serverError = error.error.message;
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

    this.appointmentService.getAppointmentDetailsForAutoSuggestion().subscribe(res => {
      this.appointmentList = res;
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
