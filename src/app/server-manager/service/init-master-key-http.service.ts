import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {InitMasterKeyService} from './init-master-key.service';
import {Observable} from 'rxjs';
import {AuthTokenService} from '../../shared/service/auth-token.service';

@Injectable({providedIn: 'root'})
export class InitMasterKeyHttpService implements InitMasterKeyService {

  private serverManagerApiBaseEndpoint: string = environment.chumbok.serverManagerApiBaseEndpoint;
  private initMasterKeyEndpoint: string = this.serverManagerApiBaseEndpoint + '/init';

  private authHeader = new HttpHeaders({'Authorization': 'Bearer ' + this.authTokenService.getAuthToken()});

  constructor(private authTokenService: AuthTokenService, private http: HttpClient) {
  }

  initKey(key: string): Observable<any> {
    return this.http.post<any>(this.initMasterKeyEndpoint, {masterKey: key},
      {withCredentials: true, headers: this.authHeader});
  }
}
