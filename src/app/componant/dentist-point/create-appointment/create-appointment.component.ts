import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CreateAppointment} from "../../../model/create-appointment";
import {CreateAppointmentService} from "../../../service/create-appointment.service";
import {TimeslotService} from "../../../service/timeslot.service";
import {FreeSlot} from "../../../model/free-slot";

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {
  submitted = false;
  form: FormGroup;
  serverError = '';
  TimeSlotArray: Array<FreeSlot> = [];

  constructor(private createAppointmentService: CreateAppointmentService, private createTimeSlot: TimeslotService, private formBuilder: FormBuilder) {
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      phoneNumber: ['', Validators.required],
      patientName: [''],
      address: [''],
      date: [''],
      timeSlot: ['']
    });

  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return true;
    }
    const createAppointment: CreateAppointment = new CreateAppointment();
    createAppointment.phoneNumber = this.form.controls['phoneNumber'].value;
    createAppointment.patientName = this.form.controls['patientName'].value;
    createAppointment.address = this.form.controls['address'].value;
    createAppointment.date = this.form.controls['date'].value;
    createAppointment.timeSlot = this.form.controls['timeSlot'].value;
    this.createAppointmentService.createAppointment(createAppointment.phoneNumber, createAppointment.patientName, createAppointment.address,
      createAppointment.date, createAppointment.timeSlot).subscribe(res => {

    }, error => {
      if (error.status === 400) {
        this.serverError = error.error.message;
      }
    });
  }

  onFindFreeTimeSlotByDate() {
    this.createTimeSlot.getTimeSlot().subscribe(res => {

      res['items'].forEach((freeSlot) => {
        const freeSlotModel: FreeSlot = new FreeSlot();
        freeSlotModel.startDateTime = freeSlot.availableTimeSlots[0].startDateTime;
        freeSlotModel.endDateTime = freeSlot.availableTimeSlots[0].endDateTime;

        this.TimeSlotArray.push(freeSlotModel);
        console.log(this.TimeSlotArray);
      });


    });
  }
}
