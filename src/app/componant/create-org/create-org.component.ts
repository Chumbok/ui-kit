import {Component, OnInit} from '@angular/core';
import {OrgTenantUserService} from '../../service/org-tenant-user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-org',
  templateUrl: './create-org.component.html',
  styleUrls: ['./create-org.component.css']
})
export class CreateOrgComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private orgTenantUserService: OrgTenantUserService, private router: Router) {
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

    this.orgTenantUserService.createOrg(this.form.controls['name'].value).subscribe(res => {
      this.router.navigate(['orgs']);
    });
  }
}
