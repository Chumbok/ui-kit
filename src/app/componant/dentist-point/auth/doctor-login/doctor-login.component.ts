import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DoctorAuthService} from "../../../../service/doctor.auth.service";

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {


  loginForm: FormGroup;
  returnUrl: string;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private authService: DoctorAuthService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  get f() {
    return this.loginForm.controls;
  }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['admin', Validators.required],
      password: ['admin', Validators.required]
    });

    this.authService.removeAuthToken();

    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  public onSubmit() {

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
  }
}
