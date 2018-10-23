import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {timer} from 'rxjs';
import {first} from 'rxjs/operators';
import {PingService} from '../service/ping.service';
import {FlashMessageService} from '../service/flash-message.service';


@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {

  private refreshTokenInProgress = false;
  private pingInProgress = false;
  private internetGotDisconnected = false;

  constructor(private authService: AuthService, private pingService: PingService, private flashMessageService: FlashMessageService) {
  }

  ngOnInit() {
    this.refreshToken30MinsTimer();
    this.pingEvery5SecondsTimer();
  }

  private refreshToken30MinsTimer() {

    timer(5000, 30 * 60 * 1000).subscribe(x => {
      if (!this.refreshTokenInProgress) {
        this.refreshTokenInProgress = true;
        this.authService.refreshToken().pipe(first()).subscribe(res => {
          this.refreshTokenInProgress = false;
        });
      }
    });
  }

  private pingEvery5SecondsTimer() {

    timer(5000, 5 * 1000).subscribe(x => {
      if (!this.pingInProgress) {
        this.pingInProgress = true;
        this.pingService.ping('uaa').pipe(first()).subscribe(
          res => {
            this.pingInProgress = false;
            if (this.internetGotDisconnected) {
              this.flashMessageService.showFlashMessage({
                messages: ['Internet connection.'],
                dismissible: true
              });
              this.internetGotDisconnected = false;
            }
          },
          error => {
            this.flashMessageService.showFlashMessage({
              messages: ['No internet connection!'],
              dismissible: true,
              type: 'danger'
            });
            this.pingInProgress = false;
            this.internetGotDisconnected = true;
          });
      }
    });
  }
}
