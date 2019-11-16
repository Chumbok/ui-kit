import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {throwError} from 'rxjs/internal/observable/throwError';
import {map} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
import {AuthService} from './auth.service';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class AuthHttpService implements AuthService {

  private uaaApiBaseEndpoint: string = environment.chumbok.uaaApiBaseEndpoint;
  private loginEndpoint: string = this.uaaApiBaseEndpoint + '/login';
  private logoutEndpoint: string = this.uaaApiBaseEndpoint + '/logout';
  private refreshEndpoint: string = this.uaaApiBaseEndpoint + '/refresh';

  constructor(private cookieService: CookieService, private http: HttpClient) {
  }

  public login(username: string, password: string) {

    this.removeAuthToken();

    return this.http.post<any>(this.loginEndpoint, {
      username: username, password: password, org: 'Chumbok', tenant: 'Chumbok'
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

  private getAuthToken(): string {
    return localStorage.getItem('token');
  }

  private removeAuthToken(): void {
    localStorage.removeItem('token');
  }

  private handleError(err: HttpErrorResponse | any) {
    return throwError(err.message || err);
  }
}
