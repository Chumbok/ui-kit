import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DoctorAuthService} from "../../../../service/doctor.auth.service";
import {PatientAuthService} from "../../../../service/patient.auth.service";
import Swal from "sweetalert2";

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
              private authService: DoctorAuthService,
              private patientAuthService: PatientAuthService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  get f() {

    return this.loginForm.controls;
  }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      usernamePatient: ['', Validators.required],
      passwordPatient: ['', Validators.required]
    });

    this.authService.removeAuthToken();
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/dashboard';
    this.returnUrlForPatient = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/patient/patient-home';
  }

  public onSubmit(value: String) {

    if (value == 'loginDoctor') {

      this.submitted = true;
      if (this.loginForm.invalid) {
        return;
      }
      this.authService.doctorLogin(this.f.username.value, this.f.password.value)
        .subscribe(
          data => {
            Swal.fire(
              'Successfully Login!',
              '',
              'success'
            )
            this.router.navigate([this.returnUrl]);
          },
          error => {
            Swal.fire(
              'Invalid Phone Number Or Password!',
              '',
              'error'
            )
          });

    } else if (value == 'loginPatient') {

      this.submitted = true;
      if (this.loginForm.invalid) {
        return;
      }
      this.patientAuthService.loginPatient(this.f.usernamePatient.value, this.f.passwordPatient.value)
        .subscribe(
          data => {
            Swal.fire(
              'Successfully Login!',
              '',
              'success'
            )
            this.router.navigate([this.returnUrlForPatient]);
          },
          error => {
            Swal.fire(
              'Invalid Phone Number Or Password!',
              '',
              'error'
            )
          });
    }
  }
}
