import {tap} from 'rxjs/operators';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {EmptyObservable} from 'rxjs-compat/observable/EmptyObservable';
import {environment} from '../../../environments/environment';

@Injectable()
export class Http401Interceptor implements HttpInterceptor {

  private enableMock: boolean = environment.chumbok.enableMock;

  constructor(private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.enableMock) {
      return new EmptyObservable<HttpEvent<any>>();
    }

    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.router.navigate(['login'], {queryParams: {returnUrl: this.router.url}});
        }
      }
    }));
  }
}
