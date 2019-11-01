import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {UserInfoService} from '../../service/user-info.service';

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
              private userInfoService: UserInfoService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['admin', Validators.required],
      password: ['admin', Validators.required]
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  get f() {
    return this.loginForm.controls;
  }

  public onSubmit() {

    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.f.username.value, this.f.password.value)
      .subscribe(
        data => {
          this.userInfoService.fetchLoggedInUserInfo().subscribe(res => {
            this.router.navigate([this.returnUrl]);
          });
        },
        error => {
        });
  }
}
