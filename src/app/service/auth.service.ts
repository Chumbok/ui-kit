import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {throwError} from 'rxjs/internal/observable/throwError';
import {map} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class AuthService {

  private callThroughGateway: boolean = environment.chumbok.apiCallThroughGateway;
  private loginEndpoint: string = this.callThroughGateway ?
    environment.chumbok.apiBaseEndpoint + '/uaa/login' : environment.chumbok.apiBaseEndpoint + '/login';
  private logoutEndpoint: string = this.callThroughGateway ?
    environment.chumbok.apiBaseEndpoint + '/uaa/logout' : environment.chumbok.apiBaseEndpoint + '/logout';

  constructor(private cookieService: CookieService, private http: HttpClient) {
  }

  public login(username: string, password: string) {

    return this.http.post<any>(this.loginEndpoint, {
      org: 'Chumbok', tenant: 'Chumbok', username: username, password: password}, {withCredentials: true})
      .pipe(map(res => {
        if (res && res.accessToken) {
          localStorage.setItem('token', res.accessToken);
        }
        return res;
      }));

  }

  public logout() {

    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.getAuthToken() })
    };

    this.http.get(this.logoutEndpoint, httpOptions).subscribe(res => {
      this.removeAuthToken();
    });
  }

  public removeAuthToken(): void {
    localStorage.removeItem('token');
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('token') != null;
  }

  private getAuthToken(): string {
    return localStorage.getItem('token');
  }

  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return throwError(err.message || err);
  }

}
