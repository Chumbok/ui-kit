import {Component, OnInit} from '@angular/core';

import {timer} from 'rxjs';
import {AuthTokenService} from '../../../service/auth-token.service';
import {PingService} from '../../../service/ping.service';
import {FlashMessageService} from '../../../service/flash-message.service';

@Component({
  selector: 'app-patient-home-layout',
  templateUrl: './patient-home-layout.component.html',
  styleUrls: ['./patient-home-layout.component.css']
})
export class PatientHomeLayoutComponent implements OnInit {

  private refreshTokenInProgress = false;
  private pingInProgress = false;
  private internetGotDisconnected = false;

  constructor(private authService: AuthTokenService, private pingService: PingService,
              private flashMessageService: FlashMessageService) {
  }

  ngOnInit() {
    this.refreshToken30MinsTimer();
    this.pingEvery5SecondsTimer();
  }

  private refreshToken30MinsTimer() {

    timer(5000, 30 * 60 * 1000).subscribe(x => {
      if (!this.refreshTokenInProgress) {
        this.refreshTokenInProgress = true;
        // this.authService.refreshToken().pipe(first()).subscribe(res => {
        //   this.refreshTokenInProgress = false;
        // });
      }
    });
  }

  private pingEvery5SecondsTimer() {

    timer(5000, 5 * 1000).subscribe(x => {
      if (!this.pingInProgress) {
        this.pingInProgress = true;
        this.pingService.ping()
          .subscribe(res => {
            if (this.internetGotDisconnected) {
              this.flashMessageService.showFlashMessage({
                messages: ['Internet connection.'],
                dismissible: true
              });
              this.internetGotDisconnected = false;
            }
          }, error => {
            this.flashMessageService.showFlashMessage({
              messages: ['No internet connection!'],
              dismissible: true,
              type: 'danger'
            });
            this.internetGotDisconnected = true;
          }, () => {
            this.pingInProgress = false;
          });
      }
    });
  }
}
