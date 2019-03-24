import {Component, OnInit} from '@angular/core';
import {AppointmentService} from "../../../service/appointment.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {
  submitted = false;
  public show: boolean = true;
  public show2: boolean = false;
  public show3: boolean = false;
  form: FormGroup;


  constructor(private appointmentService: AppointmentService,private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      patientName: ['', Validators.required],
      address: [''],
      phoneNumber: [''],
      doctorName: [''],
      specialist: [''],
      date: [''],


    });

    }

  openVerifiyBox() {
    this.show = false;
    this.show2=false;
    this.show3 = true;

  }
  onCheckDate(){
    this.show2 = true;
  }
  onTimes(){
    this.appointmentService.getAppointmentList().subscribe(res => {

    });
  }
}
