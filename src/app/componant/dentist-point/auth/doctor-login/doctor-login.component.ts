import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DoctorAuthService} from "../../../../service/doctor.auth.service";
import {PatientAuthService} from "../../../../service/patient.auth.service";
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {


  loginForm: FormGroup;

  returnUrl: string;
  returnUrlForPatient: string;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private title: Title,
              private authService: DoctorAuthService,
              private patientAuthService: PatientAuthService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  get f() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.title.setTitle('Login | Doctors point');
    this.loginForm = this.formBuilder.group({
      username: ['admin', Validators.required],
      password: ['admin', Validators.required],
      usernamePatient: ['admin', Validators.required],
      passwordPatient: ['admin', Validators.required]
    });

    this.authService.removeAuthToken();

    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/dashboard';
    this.returnUrlForPatient = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/patient/patient-home';
  }

  public onSubmit(value: String) {

    if (value == 'loginDoctor') {
      console.log(value);
      this.submitted = true;

      if (this.loginForm.invalid) {
        return;
      }

      this.authService.login(this.f.username.value, this.f.password.value)
        .subscribe(
          data => {
            console.log("This is a custom directive!" + data);
            this.router.navigate([this.returnUrl]);
          },
          error => {
          });
    } else if (value == 'loginPatient') {
      console.log(value);
      this.submitted = true;

      if (this.loginForm.invalid) {
        return;
      }

      this.patientAuthService.loginPatient(this.f.usernamePatient.value, this.f.passwordPatient.value)
        .subscribe(
          data => {
            console.log("This tive!" + data);
            this.router.navigate([this.returnUrlForPatient]);
          },
          error => {
          });
    }
    console.log(value);
  }

}
