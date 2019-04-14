import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

import {AuthService} from './auth.service';
import {LoggedInUserInfo} from '../model/logged-in-user-info';
import {map} from 'rxjs/operators';
import {LoggedInUserInfoService} from './logged-in-user-info.service';

@Injectable({providedIn: 'root'})
export class LoggedInUserInfoHttpService implements LoggedInUserInfoService {

  private callThroughGateway: boolean = environment.chumbok.apiCallThroughGateway;
  private meEndpoint: string = this.callThroughGateway ?
    environment.chumbok.apiBaseEndpoint + '/uaa/me' : environment.chumbok.apiBaseEndpoint + '/me';

  constructor(private authService: AuthService, private http: HttpClient) {
  }

  public fetchLoggedInUserInfo() {

    const httpOptions = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + this.authService.getAuthToken()})
    };

    return this.http.get<LoggedInUserInfo>(this.meEndpoint, httpOptions).pipe(map(res => {

      if (res.displayName != null) {
        localStorage.setItem('displayName', res.displayName);
      }

      if (res.profilePicture28x28pxUrl != null) {
        localStorage.setItem('profilePicture28x28pxUrl', res.profilePicture28x28pxUrl);
      }

      if (res.profilePictureUrl != null) {
        localStorage.setItem('profilePictureUrl', res.profilePictureUrl);
      }

      if (res.selectedTheme != null) {
        localStorage.setItem('selectedTheme', res.selectedTheme);
      }

      if (res.selectedLanguage != null) {
        localStorage.setItem('selectedLanguage', res.selectedLanguage);
      }
    }));

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
