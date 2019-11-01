import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {UserInfoService} from './user-info.service';
import {environment} from '../../../environments/environment';
import {AuthTokenService} from '../../service/auth-token.service';
import {LoggedInUserInfo} from '../model/logged-in-user-info';

@Injectable({providedIn: 'root'})
export class UserInfoHttpService implements UserInfoService {

  private uaaApiBaseEndpoint: string = environment.chumbok.uaaApiBaseEndpoint;
  private meEndpoint: string = this.uaaApiBaseEndpoint + '/me';

  constructor(private authTokenService: AuthTokenService, private http: HttpClient) {
  }

  public fetchLoggedInUserInfo() {

    const httpOptions = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + this.authTokenService.getAuthToken()})
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
}
