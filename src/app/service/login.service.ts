import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {throwError} from 'rxjs/internal/observable/throwError';
import {map} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class LoginService {

  private apiBaseEndpoint: String = environment.chumbok.apiBaseEndpoint;

  constructor(private cookieService: CookieService, private http: HttpClient) {
  }

  public login(username: string, password: string) {

    return this.http.post<any>(this.apiBaseEndpoint + '/login', {
      org: 'Chumbok', tenant: 'Chumbok', username: username, password: password}, {withCredentials: true})
      .pipe(map(res => {
        if (res && res.accessToken) {
          localStorage.setItem('token', res.accessToken);
        }
        return res;
      }));

  }

  public logout() {
    this.http.get(this.apiBaseEndpoint + '/uaa/logout').pipe(
      map(res => {
        localStorage.removeItem('token');
      })
    );
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('token') != null;
  }

  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return throwError(err.message || err);
  }

}
