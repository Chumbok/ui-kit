import {Injectable} from '@angular/core';
import {LoggedInUserInfoService} from './logged-in-user-info.service';

@Injectable({providedIn: 'root'})
export class LoggedInUserInfoHttpService implements LoggedInUserInfoService {

  constructor() {
  }

  public getDisplayName(): string {
    return localStorage.getItem('displayName');
  }

  public getProfilePicture28x28pxUrl?(): string {
    return localStorage.getItem('profilePicture28x28pxUrl');
  }

  public getProfilePictureUrl(): string {
    return localStorage.getItem('profilePictureUrl');
  }

  public getSelectedTheme(): string {
    return localStorage.getItem('selectedTheme');
  }

  public getSelectedLanguage(): string {
    return localStorage.getItem('selectedLanguage');
  }
}
