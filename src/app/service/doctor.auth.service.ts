import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export abstract class DoctorAuthService {

  abstract login(phoneNo: string, password: string): Observable<any>;

  abstract logout();

  abstract removeAuthToken();

  abstract isLoggedIn(): boolean;

  abstract getAuthToken(): string;

}
