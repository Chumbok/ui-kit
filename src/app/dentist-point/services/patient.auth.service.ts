import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export abstract class PatientAuthService {

  abstract signUp(name: String, gender: String, bGroup: String, username: String, email: String, address: String,
                  age: number, phoneNo: String, password: String,): Observable<any>

  abstract loginPatient(phoneNo: string, password: string): Observable<any>;

  abstract logout();

  abstract removeAuthToken();

  abstract isLoggedIn(): boolean;

  abstract getAuthToken(): string;

}
