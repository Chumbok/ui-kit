import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {CreateAppointment} from '../../../model/create-appointment';
import {AppointmentService} from '../../../service/appointment.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {
  submitted = false;
  form: FormGroup;
  serverError = '';
  timeSlotArray: Array<String> = [];
  doctorArrayList: Array<String> = [];
  doctorChamberArrayList: Array<String> = [];
  stateCtrl = new FormControl();
  getFreeTime = new FormControl();
  startTimeOfFreeSlots: string;
  send_date = new Date();
  formattedDate: any;
  appoinrmentList: Array<any>;
  searchText;

  constructor(private appointmentService: AppointmentService,
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
    createAppointment.doctorName = this.form.controls['selectDoctor'].value;
    createAppointment.doctorChamber = this.form.controls['selectChamber'].value;
    createAppointment.date = this.form.controls['date'].value;
    createAppointment.timeSlot = this.startTimeOfFreeSlots;
    this.appointmentService.createAppointment(
      createAppointment.phoneNumber,
      createAppointment.patientName,
      createAppointment.address,
      createAppointment.date,
      createAppointment.age,
      createAppointment.bloodGroup,
      createAppointment.doctorName,
      createAppointment.doctorChamber,
      createAppointment.timeSlot).subscribe(res => {
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

    this.appointmentService.getAppointmentDetails().subscribe(res => {
      this.appoinrmentList = res;
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
    this.appointmentService.getFreeTimeSlots(date).subscribe(res => {
      this.timeSlotArray = [];
      res.forEach(freeSlot => {
        this.timeSlotArray.push(freeSlot.startTime);
      });
    });
  }

  fetchDoctorList() {
    this.appointmentService.getDoctorList().subscribe(res => {

      res.forEach(doctorList => {
        console.log(doctorList)
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
        console.log(doctorChamberList)
        this.doctorChamberArrayList.push(doctorChamberList);
      });
    });
  }
  getFreeSlotsValue(startTime) {
    this.startTimeOfFreeSlots = startTime;
  }

  onLiginPatient() {
    console.log("dddd");
  }
  onClose() {
    /* TODO: add back task*/
  }
}
