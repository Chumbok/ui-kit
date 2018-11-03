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
    this.orgService.getOrgList().subscribe(res => {
      this.orgsResp = res;
      this.orgs = res['items'];
    });

  }

}
