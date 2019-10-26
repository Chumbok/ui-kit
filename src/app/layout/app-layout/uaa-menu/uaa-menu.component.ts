import {Component, OnInit} from '@angular/core';
import {PingService} from '../../../service/ping.service';

@Component({
  selector: 'app-uaa-menu',
  templateUrl: './uaa-menu.component.html',
  styleUrls: ['./uaa-menu.component.css']
})
export class UaaMenuComponent implements OnInit {

  constructor(private pingService: PingService) {
  }

  ngOnInit() {
  }
}
