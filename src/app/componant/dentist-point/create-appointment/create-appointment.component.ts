import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {CreateAppointment} from "../../../model/create-appointment";
import {CreateAppointmentService} from "../../../service/create-appointment.service";
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {SearchByPhoneAppointment} from "../../../model/search-by-phone-appointment";

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
  stateCtrl = new FormControl();
  getFreeTime = new FormControl();
  filteredStates: Observable<SearchByPhoneAppointment[]>;
  startTimeOfFreeSlots: string;

  constructor(private createAppointmentService: CreateAppointmentService,
              private formBuilder: FormBuilder) {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.createAppointmentService.getAppointmentDetails().slice())
      );
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
    createAppointment.date = this.form.controls['date'].value;
    createAppointment.timeSlot = this.startTimeOfFreeSlots;

    this.createAppointmentService.createAppointment(createAppointment.phoneNumber, createAppointment.patientName, createAppointment.address,
      createAppointment.date, createAppointment.timeSlot).subscribe(res => {
    }, error => {
      if (error.status === 400) {
        this.serverError = error.error.message;
      }
    });

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      stateCtrl: ['',],
      patientName: [''],
      address: [''],
      date: [''],
      timeSlot: ['']
    });
  }

  fetchFreeTimeSlots() {
    this.createAppointmentService.getFreeTimeSlots(this.form.controls['date'].value).subscribe(res => {
      this.timeSlotArray = [];
      res.forEach(freeSlot => {
        this.timeSlotArray.push(freeSlot.startTime);
      });
    });
  }

  getFreeSlotsValue(startTime) {
    this.startTimeOfFreeSlots = startTime;
  }

  private _filterStates(value: string): SearchByPhoneAppointment[] {
    const filterValue = value.toLowerCase();
    return this.createAppointmentService.getAppointmentDetails().filter(state => state.phoneno.toLowerCase().indexOf(filterValue) === 0);
  }
}
