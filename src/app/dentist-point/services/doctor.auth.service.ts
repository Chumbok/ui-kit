import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {DoctorChamber} from "../model/doctor-chamber";


@Injectable()
export abstract class DoctorAuthService {

  abstract signUp(name: String, gender: String, qualification: String, email: String, address: String,
                  chambers: Array<DoctorChamber>, phoneNo: String, password: String,): Observable<any>

  abstract doctorLogin(phoneNo: string, password: string): Observable<any>;

  abstract logout();

  abstract removeAuthToken();

  abstract isLoggedIn(): boolean;

  abstract getAuthToken(): string;

}
