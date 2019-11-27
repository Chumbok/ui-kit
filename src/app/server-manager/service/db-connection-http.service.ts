import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {AuthTokenService} from '../../shared/service/auth-token.service';
import {DbConnectionService} from './db-connection.service';
import {DbConnection} from '../model/db-connection';
import {CreateDbConnection} from '../model/create-db-connection';

@Injectable({providedIn: 'root'})
export class DbConnectionHttpService implements DbConnectionService {

  private serverManagerApiBaseEndpoint: string = environment.chumbok.serverManagerApiBaseEndpoint;
  private dbConnectionListEndpoint: string = this.serverManagerApiBaseEndpoint + '/db/connections';

  private authHeader = new HttpHeaders({'Authorization': 'Bearer ' + this.authTokenService.getAuthToken()});

  constructor(private authTokenService: AuthTokenService, private http: HttpClient) {
  }

  getDbConnectionList(): Observable<DbConnection> {
    return this.http.get<DbConnection>(this.dbConnectionListEndpoint,
      {withCredentials: true, headers: this.authHeader});
  }

  createDbConnection(createDbConnection: CreateDbConnection): Observable<void> {
    return this.http.post<any>(this.dbConnectionListEndpoint, createDbConnection,
      {withCredentials: true, headers: this.authHeader});
  }
}
