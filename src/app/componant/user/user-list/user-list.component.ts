import { Component, OnInit } from '@angular/core';
import {OrgTenantUserService} from '../../../service/org-tenant-user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  orgId: string;
  tenantId: string;

  usersResp: any;
  users: Array<any>;
  itemFrom: number;
  itemTo: number;
  totalElements: number;

  constructor(private orgTenantUserService: OrgTenantUserService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.orgId = params['id'];
      this.tenantId = params['tid'];
    });
  }

  ngOnInit() {
    this.orgTenantUserService.getUserList(this.orgId, this.tenantId).subscribe(res => {
      this.usersResp = res;
      this.users = res['items'];
      this.itemFrom = this.usersResp.page + 1;
      this.itemTo = (this.usersResp.page + 1) * this.usersResp.size;
      this.totalElements = this.usersResp.totalElements;
    });

  }
}
