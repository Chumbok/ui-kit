import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {throwError} from 'rxjs/internal/observable/throwError';
import {map} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from "rxjs";
import {PatientAuthService} from "./patient.auth.service";

@Injectable({providedIn: 'root'})
export class PatientAuthHttpService implements PatientAuthService {

  private callThroughLocalServer: boolean = environment.chumbok.apiCallThroughLocalServer;

  private loginEndPointLocalServer: string = this.callThroughLocalServer ?
    environment.chumbok.apiBaseEndpointLocalServer + '/public/patient/login' : environment.chumbok.apiBaseEndpointLocalServer + '/patient/login';

  private signUpEndPointLocalServer: string = this.callThroughLocalServer ?
    environment.chumbok.apiBaseEndpointLocalServer + '/public/patient/signup' : environment.chumbok.apiBaseEndpointLocalServer + '/patient/signup';

  private logoutEndPointLocalServer: string = this.callThroughLocalServer ?
    environment.chumbok.apiBaseEndpointLocalServer + '/public/doctor/logout' : environment.chumbok.apiBaseEndpointLocalServer + '/logout';

  constructor(private cookieService: CookieService, private http: HttpClient) {
  }

  public loginPatient(phoneNo: string, password: string) {

    return this.http.post<any>(this.loginEndPointLocalServer, {
      phoneNo: phoneNo, password: password
    }, {withCredentials: true})
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

  signUp(name: String, gender: String, bGroup: String, username: String, email: String, address: String, age: number,
         phoneNo: String, password: String): Observable<any> {

    return this.http.post<any>(this.signUpEndPointLocalServer, {
      name: name,
      gender: gender,
      age: age,
      bloodGroup: bGroup,
      phoneNo: phoneNo,
      email: email,
      address: address,
      username: username,
      password: password,
    }, {withCredentials: true})
      .pipe(map(res => {
        if (res && res.id) {

        }
        return res;
      }));
  }

  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return throwError(err.message || err);
  }

}
