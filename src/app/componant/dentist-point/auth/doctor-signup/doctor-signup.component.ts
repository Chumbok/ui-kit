import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DoctorAuthService} from "../../../../service/doctor.auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DoctorChamber} from "../../../../model/doctor-chamber";
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-doctor-signup',
  templateUrl: './doctor-signup.component.html',
  styleUrls: ['./doctor-signup.component.css']
})
export class DoctorSignupComponent implements OnInit {

  signUpForm: FormGroup;
  returnUrl: string;
  submitted = false;


  constructor(private formBuilder: FormBuilder,
              private title: Title,
              private authService: DoctorAuthService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  get f() {
    return this.signUpForm.controls;
  }

  ngOnInit() {
    this.title.setTitle('Doctor signup | Doctors point');
    this.signUpForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        gender: ['', Validators.required],
        qualification: ['', Validators.required],
        email: ['', Validators.required],
        address: ['', Validators.required],
        chambers: ['', Validators.required],
        phoneNo: ['', Validators.required],
        password: ['', Validators.required]
      }
    )
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/doctorpoint/login';
  }

  public onSubmit() {

    this.submitted = true;
    const chamberLists: Array<DoctorChamber> = [];
    if (this.signUpForm.invalid) {
      return;
    }
    var chamberList = new String(this.f.chambers.value).split("\n");
    chamberList.forEach(function (chamberAddress) {
      const doctorChamber: DoctorChamber = new DoctorChamber();
      doctorChamber.chamberAddress = chamberAddress;
      chamberLists.push(doctorChamber)
    });
    console.log(this.f.gender.value);
    this.authService.signUp(this.f.name.value, this.f.gender.value, this.f.qualification.value,
      this.f.email.value, this.f.address.value, chamberLists, this.f.phoneNo.value,
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
