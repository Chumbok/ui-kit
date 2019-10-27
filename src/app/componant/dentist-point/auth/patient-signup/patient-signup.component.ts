import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DoctorChamber} from "../../../../model/doctor-chamber";
import {PatientAuthService} from "../../../../service/patient.auth.service";

@Component({
  selector: 'app-patient-signup',
  templateUrl: './patient-signup.component.html',
  styleUrls: ['./patient-signup.component.css']
})
export class PatientSignupComponent implements OnInit {

  signUpForm: FormGroup;
  returnUrl: string;
  submitted = false;
  serverError = '';

  constructor(private formBuilder: FormBuilder,
              private patientAuthService: PatientAuthService,
              private router: Router,
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
        username: ['', Validators.required],
        email: ['', Validators.required],
        bGroup: ['', Validators.required],
        address: ['', Validators.required],
        age: ['', Validators.required],
        phoneNo: ['', [Validators.required, Validators.minLength(6), Validators.pattern("^[0-9]*$")]],
        password: ['', [Validators.required, Validators.minLength(6)]]
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

    this.patientAuthService.signUp(this.f.name.value, this.f.gender.value, this.f.bGroup.value, this.f.username.value,
      this.f.email.value, this.f.address.value, this.f.age.value, this.f.phoneNo.value,
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
}
