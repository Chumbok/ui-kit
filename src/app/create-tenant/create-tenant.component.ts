import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {OrgTenantUserService} from '../service/org-tenant-user.service';

@Component({
  selector: 'app-create-tenant',
  templateUrl: './create-tenant.component.html',
  styleUrls: ['./create-tenant.component.css']
})
export class CreateTenantComponent implements OnInit {

  orgId: string;
  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private orgTenantUserService: OrgTenantUserService,
              private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.orgId = params['id'];
    });
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required]
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

    this.orgTenantUserService.createTenant(this.orgId, this.form.controls['name'].value).subscribe(res => {
      this.router.navigate(['orgs', this.orgId, 'tenants']);
    });
  }

}
