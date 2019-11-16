import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DoctorAuthService} from '../../../../service/doctor.auth.service';
import {AuthTokenService} from "../../../../../shared/service/auth-token.service";


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
  serverError = '';

  constructor(private formBuilder: FormBuilder,
              private authService: DoctorAuthService,
              private authTokenService: AuthTokenService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  get f() {

    return this.loginForm.controls;
  }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['admin', Validators.required],
      password: ['admin', Validators.required],
      usernamePatient: ['admin', Validators.required],
      passwordPatient: ['admin', Validators.required]
    });

    this.authService.removeAuthToken();
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/dentist-point/doctors/calendar-view';
    this.returnUrlForPatient = this.activatedRoute.snapshot.queryParams['returnUrl']
      || '/dentist-point/patient/show-prescription-list';
  }

  public onSubmit() {
      this.submitted = true;
      if (this.loginForm.invalid) {
        return;
      }
      this.authService.doctorLogin(this.f.username.value, this.f.password.value)
        .subscribe(
          data => {
            this.router.navigate([this.returnUrl]);
            if (this.authTokenService.getAuthTokenScopes()[0] == 'ROLE_DOCTOR') {
              localStorage.setItem('loginType', 'loginDoctor');
              this.router.navigate([this.returnUrl]);
            }
            if (this.authTokenService.getAuthTokenScopes()[0] == 'ROLE_USER') {
              localStorage.setItem('loginType', 'loginPatient');
              this.router.navigate([this.returnUrlForPatient]);

            }
          },
          error => {

            if (error.status === 403) {
              this.serverError = error.error.message;
            }
            if (error.status === 500) {
              this.serverError = error.error.message;
            }
          });
  }
}
