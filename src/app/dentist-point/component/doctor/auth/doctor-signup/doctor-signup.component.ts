import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';
import {DoctorChamber} from '../../../../model/doctor-chamber';
import {DoctorAuthService} from '../../../../service/doctor.auth.service';

@Component({
  selector: 'app-doctor-signup',
  templateUrl: './doctor-signup.component.html',
  styleUrls: ['./doctor-signup.component.css']
})

export class DoctorSignupComponent implements OnInit {

  signUpForm: FormGroup;
  returnUrl: string;
  submitted = false;
  show: boolean;
  showDoctorInfo: boolean;
  serverError = '';

  constructor(private formBuilder: FormBuilder,
              private authService: DoctorAuthService,
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
        qualification: ['', Validators.required],
        email: [''],
        address: ['', Validators.required],
        chambers: ['', Validators.required],
        phoneNo: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[0-9]*$')]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
      }
    );
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/login';
    this.show = true;
    this.showDoctorInfo = false;
  }

  public onSubmit() {

    this.submitted = true;
    const chamberLists: Array<DoctorChamber> = [];
    if (this.signUpForm.invalid) {
      return;
    }

    var chamberList = new String(this.f.chambers.value).split('\n');
    chamberList.forEach(function (chamberAddress) {
      const doctorChamber: DoctorChamber = new DoctorChamber();
      doctorChamber.chamberAddress = chamberAddress;
      chamberLists.push(doctorChamber);
    });

    this.authService.signUp(this.f.name.value, this.f.gender.value, this.f.qualification.value,
      this.f.email.value, this.f.address.value, chamberLists, this.f.phoneNo.value,
      this.f.password.value)
      .subscribe(
        data => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });
          Toast.fire({type: 'success', title: 'Sign Up in successfully'});
          this.router.navigate([this.returnUrl]);
        },
        error => {
          if (error.status === 500) {
            this.serverError = 'Already taken phone number';
          }
        });
  }

  nextToPatientInfo() {

    if (this.f.password.value === this.f.confirmPassword.value) {
      this.serverError = '';
      this.show = false;
      this.showDoctorInfo = true;
    } else {
      this.serverError = 'Password Cannot Match';
    }
  }

  back() {

    this.show = true;
    this.showDoctorInfo = false;
  }
}
