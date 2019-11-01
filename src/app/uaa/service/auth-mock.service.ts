import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({providedIn: 'root'})
export class AuthMockService implements AuthService {

  private loggedIn = false;

  public login(username: string, password: string) {
    console.log('HTTP login is disabled because environment.chumbok.enableMock=true.');
    this.loggedIn = true;
    return of({});
  }

  public logout() {
    console.log('HTTP logout is disabled because environment.chumbok.enableMock=true.');
    this.loggedIn = false;
  }

  public refreshToken() {
    console.log('HTTP refreshToken is disabled because environment.chumbok.enableMock=true.');
    return of({});
  }
}
