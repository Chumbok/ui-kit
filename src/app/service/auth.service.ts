import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export abstract class AuthService {

  abstract login(phoneNo: string, password: string): Observable<any>;

  abstract logout();

  abstract refreshToken(): Observable<any>;

  abstract removeAuthToken();

  abstract isLoggedIn(): boolean;

  abstract getAuthToken(): string;

}
