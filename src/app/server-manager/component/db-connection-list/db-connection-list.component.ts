import {Component, OnInit} from '@angular/core';
import {DbConnectionService} from '../../service/db-connection.service';

@Component({
  selector: 'app-db-connection-list',
  templateUrl: './db-connection-list.component.html',
  styleUrls: ['./db-connection-list.component.css']
})
export class DbConnectionListComponent implements OnInit {

  dbConnections: Array<any>;
  itemFrom: number;
  itemTo: number;
  totalElements: number;

  constructor(private dbConnectionService: DbConnectionService) {
  }

  ngOnInit() {
    this.dbConnectionService.getDbConnectionList().subscribe(res => {
      this.dbConnections = res['items'];
      this.itemFrom = res['page'] + 1;
      this.itemTo = (res['page'] + 1) * res['pageSize'];
      this.totalElements = res['totalElements'];
    });
  }
}
