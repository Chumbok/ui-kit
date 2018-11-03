import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Observable, of} from 'rxjs';

@Injectable()
export class OrgService {

  private enableMock: boolean = environment.chumbok.enableMock;
  private callThroughGateway: boolean = environment.chumbok.apiCallThroughGateway;
  private orgListEndpoint: string = this.callThroughGateway ?
    environment.chumbok.apiBaseEndpoint + '/uaa/orgs' : environment.chumbok.apiBaseEndpoint + '/orgs';

  private httpOptions = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.authService.getAuthToken()})
  };

  constructor(private authService: AuthService, private http: HttpClient) {
  }

  public getOrgList(): Observable<any> {
    return this.enableMock ? this.getOrgListMock() : this.getOrgListReal();
  }

  private getOrgListReal(): Observable<any> {
    return this.http.get<any>(this.orgListEndpoint, this.httpOptions);
  }

  private getOrgListMock(): Observable<any> {
    const mockResp = '{"page":0,"size":10,"totalPages":1,"totalElements":1,' +
      '"items":[{"id":"45ad1c1b-9c1d-469a-9cd2-a1c176c675dc","name":"Chumbok"}]}';
    return of(JSON.parse(mockResp));
  }
}
