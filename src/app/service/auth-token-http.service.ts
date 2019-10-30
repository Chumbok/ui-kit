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
}
