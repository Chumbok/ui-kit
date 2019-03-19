import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {
  submitted = false;
  public show: boolean = true;
  public submitBtn: boolean = true;

  constructor() {
  }

  ngOnInit() {

  }

  openVerifiyBox() {
    this.show = false;
    this.submitBtn = true;
  }
}
