import {Component, ViewEncapsulation} from '@angular/core';
import {LoggedInUserInfoService} from '../../../../service/logged-in-user-info.service';


@Component({
  selector: 'patinet-dashboard-head',
  templateUrl: './patinet-dashboard-head.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PatientDashboardHeadComponent {

  displayName: string;
  profilePicture28x28pxUrl: string;

  constructor(private loggedInUserInfoService: LoggedInUserInfoService) {
  }

  ngOnInit() {
    this.displayName = this.loggedInUserInfoService.getDisplayName();
    this.profilePicture28x28pxUrl = this.loggedInUserInfoService.getProfilePicture28x28pxUrl() || '../../assets/image/user.png';
  }
}
