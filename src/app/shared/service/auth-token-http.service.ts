import {Injectable} from '@angular/core';
import {AuthTokenService} from './auth-token.service';

@Injectable({providedIn: 'root'})
export class AuthTokenHttpService implements AuthTokenService {

  constructor() {
  }

  public getAuthToken(): string {
    return localStorage.getItem('token');
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('token') != null;
  }

  public getAuthTokenScopes(): string[] {

    let jwtData = this.getAuthToken().split('.')[1];
    let decodedJwtJsonData = window.atob(jwtData);
    let decodedJwtData = JSON.parse(decodedJwtJsonData);
    let roles = decodedJwtData.scopes;
    return roles;
  }
}
