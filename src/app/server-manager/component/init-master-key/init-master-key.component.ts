import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {InitMasterKeyService} from '../../service/init-master-key.service';

@Component({
  selector: 'app-init-master-key',
  templateUrl: './init-master-key.component.html',
  styleUrls: ['./init-master-key.component.css']
})
export class InitMasterKeyComponent implements OnInit {

  form: FormGroup;
  returnUrl: string;
  submitted = false;
  serverError = '';

  constructor(private formBuilder: FormBuilder,
              private initMasterKeyService: InitMasterKeyService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

    this.form = this.formBuilder.group({
      key: ['', Validators.required],
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  get f() {
    return this.form.controls;
  }

  public onSubmit(): void {

    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.initMasterKeyService.initKey(this.form.controls['key'].value).subscribe(res => {
      // TODO: flush message.
    }, error => {
      if (error.status !== 200) {
        if (error.error['message'] !== undefined) {
          this.serverError = error.error.message;
        } else {
          this.serverError = 'Could not process this request. Contact administrator.';
        }
      }
    });
  }
}
