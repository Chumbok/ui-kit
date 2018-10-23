import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {timer} from 'rxjs';
import {first} from 'rxjs/operators';


@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {

  private refreshTokenInProgress = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.refreshToken30MinsTimer();
  }

  private refreshToken30MinsTimer() {

    // Run every 30 minutes.
    timer(0, 30 * 60 * 1000).subscribe(x => {
      if (!this.refreshTokenInProgress) {
        this.refreshTokenInProgress = true;
        this.authService.refreshToken().pipe(first()).subscribe(res => {
          this.refreshTokenInProgress = false;
        });
      }
    });
  }
}
