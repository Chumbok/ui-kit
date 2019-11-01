import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';

@Component({
  template: ''
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
