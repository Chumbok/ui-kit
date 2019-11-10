import {Injectable} from '@angular/core';
import {AuthTokenService} from './auth-token.service';

@Injectable({providedIn: 'root'})
export class AuthTokenMockService implements AuthTokenService {

  public getAuthToken(): string {
    console.log('Returning mock token because environment.chumbok.enableMock=true.');
    return 'mockToken';
  }

  public isLoggedIn(): boolean {
    console.log('removeAuthToken is not needed because environment.chumbok.enableMock=true.');
    return false;
  }

  getAuthTokenScopes(): string[] {
    return [];
  }
}
