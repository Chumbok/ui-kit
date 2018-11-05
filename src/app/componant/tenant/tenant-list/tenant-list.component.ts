import {Component, OnInit} from '@angular/core';
import {OrgTenantUserService} from '../../../service/org-tenant-user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.css']
})
export class TenantListComponent implements OnInit {

  orgId: string;
  tenantResp: any;
  tenants: Array<any>;

  constructor(private orgTenantUserService: OrgTenantUserService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.orgId = params['id'];
    });
  }

  ngOnInit() {
    this.orgTenantUserService.getTenantList(this.orgId).subscribe(res => {
      this.tenantResp = res;
      this.tenants = res['items'];
    });

  }

}
