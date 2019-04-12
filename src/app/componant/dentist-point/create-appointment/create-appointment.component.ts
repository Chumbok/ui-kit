import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";
import {CreateAppointment} from "../../../model/create-appointment";
import {CreateAppointmentService} from "../../../service/create-appointment.service";
import {TimeslotService} from "../../../service/timeslot.service";
import {FreeSlot} from "../../../model/free-slot";
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {SearchByPhoneAppointment} from "../../../model/search-by-phone-appointment";

// export interface State {
//   flag: string;
//   name: string;
//   population: string;
// }

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

  stateCtrl = new FormControl();
  filteredStates: Observable<SearchByPhoneAppointment[]>;

  states: SearchByPhoneAppointment[] = [
    {
      phoneno: '01988851890',
      nameP: 'monirozzaman roni',
      addressP: 'gazipur'
    },
    {
      phoneno: '01788851890',
      nameP: 'roni',
      addressP: 'gazipur'
    },
    {
      phoneno: '01998851890',
      nameP: 'monirozzaman roni',
      addressP: 'gazipur'
    },
    {
      phoneno: '01708851890',
      nameP: 'roni',
      addressP: 'gazipur'
    },
    {
      phoneno: '01938851890',
      nameP: 'monirozzaman roni',
      addressP: 'gazipur'
    },
    {
      phoneno: '01748851890',
      nameP: 'roni',
      addressP: 'gazipur'
    }
  ];

  constructor(private createAppointmentService: CreateAppointmentService, private createTimeSlot: TimeslotService,
              private formBuilder: FormBuilder) {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );
  }
  private _filterStates(value: string): SearchByPhoneAppointment[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.phoneno.toLowerCase().indexOf(filterValue) === 0);
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      stateCtrl: ['', ],
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
    createAppointment.phoneNumber = this.stateCtrl.value;
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
