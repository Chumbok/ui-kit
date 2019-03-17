import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {OrgTenantUserService} from '../../../../service/org-tenant-user.service';
import {User} from '../../../../model/user';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  orgId: string;
  tenantId: string;
  form: FormGroup;
  submitted = false;
  serverError = '';

  constructor(private formBuilder: FormBuilder, private orgTenantUserService: OrgTenantUserService,
              private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.orgId = params['id'];
      this.tenantId = params['tid'];
    });
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      displayName: ['', Validators.required]
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const user: User = new User();
    user.username = this.form.controls['username'].value;
    user.password = this.form.controls['password'].value;
    user.displayName = this.form.controls['displayName'].value;
    user.roles = ['USER'];

    this.orgTenantUserService.createUser(this.orgId, this.tenantId, user).subscribe(res => {
      this.router.navigate(['orgs', this.orgId, 'tenants', this.tenantId, 'users']);
    }, error => {
      if (error.status === 400) {
        this.serverError = error.error.message;
      }
    });
  }


}
