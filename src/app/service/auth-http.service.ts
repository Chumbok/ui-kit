import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {throwError} from 'rxjs/internal/observable/throwError';
import {map} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
import {AuthService} from './auth.service';

@Injectable({providedIn: 'root'})
export class AuthHttpService implements AuthService {

  private callThroughGateway: boolean = environment.chumbok.apiCallThroughGateway;

  private loginEndpoint: string = this.callThroughGateway ?
    environment.chumbok.apiBaseEndpoint + '/uaa/login' : '/login';

  private logoutEndpoint: string = this.callThroughGateway ?
    environment.chumbok.apiBaseEndpoint + '/uaa/logout' : '/logout';

  private refreshEndpoint: string = environment.chumbok.authRefreshEndpoint;

  constructor(private cookieService: CookieService, private http: HttpClient) {
  }

  public login(phoneNo: string, password: string) {

    return this.http.post<any>(this.loginEndpoint, {
      phoneNo: phoneNo, password: password
    }, {withCredentials: true})
      .pipe(map(res => {
        if (res && res.accessToken) {
          localStorage.setItem('token', res.accessToken);
        }
        return res;
      }));

  }

  public logout() {

    const httpOptions = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + this.getAuthToken()})
    };

    this.http.get(this.logoutEndpoint, httpOptions).subscribe(res => {
      this.removeAuthToken();
    });
  }

  public refreshToken() {

    const httpOptions = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + this.getAuthToken()})
    };
    return this.http.get(this.refreshEndpoint, httpOptions).pipe(map(
      res => {
        localStorage.setItem('token', res['accessToken']);
      }
    ));
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
