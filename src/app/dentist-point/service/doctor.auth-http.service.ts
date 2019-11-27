import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {throwError} from 'rxjs/internal/observable/throwError';
import {map} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
import {DoctorAuthService} from './doctor.auth.service';
import {DoctorChamber} from '../model/doctor-chamber';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class DoctorAuthHttpService implements DoctorAuthService {


  private loginEndPointLocalServer: string =
    environment.chumbok.dentistPointApiBaseEndPoint + '/public/doctor/login';


  private signUpEndPointLocalServer: string =
    environment.chumbok.dentistPointApiBaseEndPoint + '/public/doctor/signup';


  private logoutEndPointLocalServer: string =
    environment.chumbok.dentistPointApiBaseEndPoint + '/public/doctor/logout';


  constructor(private cookieService: CookieService, private http: HttpClient) {
  }

  public doctorLogin(phoneNo: string, password: string) {

    return this.http.post<any>(this.loginEndPointLocalServer, {
      phoneNo: phoneNo, password: password
    })
      .pipe(map(res => {
        if (res && res.token) {
          localStorage.setItem('token', res.token);
        }
        return res;
      }));

  }

  public logout() {

    const httpOptions = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + this.getAuthToken()})
    };
    this.http.get(this.logoutEndPointLocalServer, httpOptions).subscribe(res => {
      this.removeAuthToken();
    });
  }


  public removeAuthToken(): void {

    localStorage.removeItem('token');
  }

  public isLoggedIn(): boolean {

    return localStorage.getItem('token') != null;
  }

  public getAuthToken(): string {

    return localStorage.getItem('token');
  }

  signUp(name: String, gender: String, qualification: String, email: String, address: String,
         chambers: Array<DoctorChamber>, phoneNo: String, password: String): Observable<any> {

    return this.http.post<any>(this.signUpEndPointLocalServer, {
      name: name,
      gander: gender,
      qualification: qualification,
      phoneNo: phoneNo,
      email: email,
      address: address,
      password: password,
      chambers: chambers
    }, {withCredentials: true})
      .pipe(map(res => {
        if (res && res.id) {

        }
        return res;
      }));
  }

  private handleError(err: HttpErrorResponse | any) {
    return throwError(err.message || err);
  }
}
