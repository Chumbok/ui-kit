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

  public removeAuthToken(): void {

    console.log('removeAuthToken is not needed because environment.chumbok.enableMock=true.');
  }

  public isLoggedIn(): boolean {

    console.log('removeAuthToken is not needed because environment.chumbok.enableMock=true.');
    return this.loggedIn;
  }

  public getAuthToken(): string {

    console.log('Returning mock token because environment.chumbok.enableMock=true.');
    return 'mockToken';
  }

}
