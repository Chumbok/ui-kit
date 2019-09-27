import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {throwError} from 'rxjs/internal/observable/throwError';
import {map} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
import {DoctorAuthService} from "./doctor.auth.service";

@Injectable({providedIn: 'root'})
export class DoctorAuthHttpService implements DoctorAuthService {

  private callThroughLocalServer: boolean = environment.chumbok.apiCallThroughLocalServer;

  private loginEndPointLocalServer: string = this.callThroughLocalServer ?
    environment.chumbok.apiBaseEndpointLocalServer + '/public/doctor/login' : environment.chumbok.apiBaseEndpointLocalServer + '/login';

  private logoutEndPointLocalServer: string = this.callThroughLocalServer ?
    environment.chumbok.apiBaseEndpointLocalServer + '/public/doctor/logout' : environment.chumbok.apiBaseEndpointLocalServer + '/logout';

  constructor(private cookieService: CookieService, private http: HttpClient) {
  }

  public login(phoneNo: string, password: string) {

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

  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return throwError(err.message || err);
  }


}
