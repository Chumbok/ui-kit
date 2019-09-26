import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../service/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoggedInUserInfoService} from '../../../service/logged-in-user-info.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl: string;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private loggedInUserInfoService: LoggedInUserInfoService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['admin', Validators.required],
      password: ['admin', Validators.required]
    });

    this.authService.removeAuthToken();

    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  get f() { return this.loginForm.controls; }

  public onSubmit() {

    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.f.username.value, this.f.password.value)
      .subscribe(
        data => {
          console.log("This is a custom directive!");
          this.loggedInUserInfoService.fetchLoggedInUserInfo().subscribe(res => {

            this.router.navigate([this.returnUrl]);
          });
        },
        error => {
        });
  }

}
