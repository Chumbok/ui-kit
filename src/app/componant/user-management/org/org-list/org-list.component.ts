import {Component, OnInit} from '@angular/core';
import {OrgTenantUserService} from '../../../../service/org-tenant-user.service';


@Component({
  selector: 'app-org-list',
  templateUrl: './org-list.component.html',
  styleUrls: ['./org-list.component.css']
})
export class OrgListComponent implements OnInit {

  orgsResp: any;
  orgs: Array<any>;

  constructor(private orgTenantUserService: OrgTenantUserService) {
  }

  ngOnInit() {
    this.orgTenantUserService.getOrgList().subscribe(
      res => {
      this.orgsResp = res;
      this.orgs = res['items'];
    });

  }

}
