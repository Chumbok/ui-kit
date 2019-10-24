import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DoctorChamber} from "../../../../model/doctor-chamber";
import {PatientAuthService} from "../../../../service/patient.auth.service";
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-patient-signup',
  templateUrl: './patient-signup.component.html',
  styleUrls: ['./patient-signup.component.css']
})
export class PatientSignupComponent implements OnInit {

  signUpForm: FormGroup;
  returnUrl: string;
  submitted = false;


  constructor(private formBuilder: FormBuilder,
              private title: Title,
              private patientAuthService: PatientAuthService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  get f() {
    return this.signUpForm.controls;
  }

  ngOnInit() {
    this.title.setTitle('Patient signup | Doctors point');
    this.signUpForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        gender: ['', Validators.required],
        username: ['', Validators.required],
        email: ['', Validators.required],
        bGroup: ['', Validators.required],
        address: ['', Validators.required],
        age: ['', Validators.required],
        phoneNo: ['', Validators.required],
        password: ['', Validators.required]
      }
    )
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || 'doctorpoint/login';
  }

  public onSubmit() {

    this.submitted = true;
    const chamberLists: Array<DoctorChamber> = [];
    if (this.signUpForm.invalid) {
      return;
    }

    console.log(this.f.gender.value);
    this.patientAuthService.signUp(this.f.name.value, this.f.gender.value, this.f.bGroup.value, this.f.username.value,
      this.f.email.value, this.f.address.value, this.f.age.value, this.f.phoneNo.value,
      this.f.password.value)
      .subscribe(
        data => {
          console.log("This is a custom directive!" + data);
          this.router.navigate([this.returnUrl]);
        },
        error => {
        });

  }
}
