import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PatientAuthService} from "../../../../service/patient.auth.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-patient-signup',
  templateUrl: './patient-signup.component.html',
  styleUrls: ['./patient-signup.component.css']
})

export class PatientSignupComponent implements OnInit {

  show: boolean;
  showPatienInfo: boolean;
  signUpForm: FormGroup;
  returnUrl: string;
  submitted = false;
  serverError = '';

  constructor(private formBuilder: FormBuilder,
              private patientAuthService: PatientAuthService,
              private router: Router,
              private datePipe: DatePipe,
              private activatedRoute: ActivatedRoute) {
  }

  get f() {
    return this.signUpForm.controls;
  }

  ngOnInit() {

    this.signUpForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        gender: ['', Validators.required],
        email: [''],
        bGroup: ['', Validators.required],
        address: ['', Validators.required],
        age: ['', Validators.required],
        phoneNo: ['', [Validators.required, Validators.minLength(6), Validators.pattern("^[0-9]*$")]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
      }
    )
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || 'doctorpoint/login';
    this.show = true;
    this.showPatienInfo = false;
  }

  public onSubmit() {
    var birthOfDate = parseInt(this.datePipe.transform(this.signUpForm.controls['age'].value, 'yyyy-MM-dd'));
    /*  console.log("Age"+birthOfDate);
      var birthDay:number = parseInt(birthOfDate);*/


    console.log("birthDay" + birthOfDate);
    this.submitted = true;
    if (this.signUpForm.invalid) {
      return;
    }
    this.patientAuthService.signUp(this.f.name.value, this.f.gender.value, this.f.bGroup.value, this.f.phoneNo.value,
      this.f.email.value, this.f.address.value, birthOfDate, this.f.phoneNo.value,
      this.f.password.value)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          if (error.status === 500) {
            this.serverError = "Already taken phone number";
          }
        });
  }

  nextToPatientInfo() {

    if (this.f.password.value == this.f.confirmPassword.value) {
      this.serverError = '';
      this.show = false;
      this.showPatienInfo = true;
    } else {
      this.serverError = "Password Cannot Match";
    }
  }

  back() {

    this.show = true;
    this.showPatienInfo = false;
  }
}
