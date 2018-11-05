import {Component, OnInit} from '@angular/core';
import {LoggedInUserInfoService} from '../../service/logged-in-user-info.service';

@Component({
  selector: 'app-template-topnav',
  templateUrl: './template-topnav.component.html'
})
export class TemplateTopnavComponent implements OnInit {

  displayName: string;
  profilePicture28x28pxUrl: string;

  constructor(private loggedInUserInfoService: LoggedInUserInfoService) {
  }

  ngOnInit() {
    this.displayName = this.loggedInUserInfoService.getDisplayName();
    this.profilePicture28x28pxUrl = this.loggedInUserInfoService.getProfilePicture28x28pxUrl() || '../../assets/image/user.png';
  }

}
