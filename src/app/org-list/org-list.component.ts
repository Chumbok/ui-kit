import { Component, OnInit } from '@angular/core';
import {OrgService} from '../service/org.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-org-list',
  templateUrl: './org-list.component.html',
  styleUrls: ['./org-list.component.css']
})
export class OrgListComponent implements OnInit {

  orgsResp: any;
  orgs: Array<any>;

  constructor(private orgService: OrgService) { }

  ngOnInit() {
    this.orgService.getOrgListMock().subscribe(res => {
      this.orgsResp = res;
      this.orgs = res['items']
      console.log(this.orgsResp);
      console.log(this.orgs);
    });

  }

}
