import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Observable, of} from 'rxjs';

@Injectable()
export class OrgTenantUserService {

  private enableMock: boolean = environment.chumbok.enableMock;
  private callThroughGateway: boolean = environment.chumbok.apiCallThroughGateway;

  private orgListEndpoint: string = this.callThroughGateway ?
    environment.chumbok.apiBaseEndpoint + '/uaa/orgs' : environment.chumbok.apiBaseEndpoint + '/orgs';

  private serviceBaseEndpoint: string = this.callThroughGateway ?
    environment.chumbok.apiBaseEndpoint + '/uaa' : environment.chumbok.apiBaseEndpoint;

  private httpOptions = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.authService.getAuthToken()})
  };

  private authHeader = new HttpHeaders({'Authorization': 'Bearer ' + this.authService.getAuthToken()});

  constructor(private authService: AuthService, private http: HttpClient) {
  }

  public getOrgList(): Observable<any> {
    return this.enableMock ? this.getOrgListMock() : this.getOrgListReal();
  }

  public createOrg(name: string): Observable<any> {
    return this.http.post<any>(this.serviceBaseEndpoint + '/orgs', {name: name},
      {withCredentials: true, headers: this.authHeader});
  }

  public getTenantList(orgId: string): Observable<any> {
    return this.enableMock ? this.getTenantListMock() : this.getTenantListReal(orgId);
  }

  public createTenant(orgId: string, name: string): Observable<any> {
    return this.http.post<any>(this.serviceBaseEndpoint + '/orgs/' + orgId + '/tenants', {name: name},
      {withCredentials: true, headers: this.authHeader});
  }

  public getUserList(orgId: string, tenantId: string): Observable<any> {
    return this.enableMock ? this.getUserListMock() : this.getUserListReal(orgId, tenantId);
  }

  private getOrgListReal(): Observable<any> {
    return this.http.get<any>(this.orgListEndpoint, this.httpOptions);
  }

  private getTenantListReal(orgId: string): Observable<any> {
    return this.http.get<any>(this.serviceBaseEndpoint + '/orgs/' + orgId + '/tenants', this.httpOptions);
  }

  private getUserListReal(orgId: string, tenantId: string): Observable<any> {
    return this.http.get<any>(this.serviceBaseEndpoint + '/orgs/' + orgId + '/tenants/' + tenantId + '/users', this.httpOptions);
  }

  private getOrgListMock(): Observable<any> {
    const mockResp = '{"page":0,"size":10,"totalPages":1,"totalElements":1,' +
      '"items":[{"id":"45ad1c1b-9c1d-469a-9cd2-a1c176c675dc","name":"Chumbok"}]}';
    return of(JSON.parse(mockResp));
  }

  private getTenantListMock(): Observable<any> {
    const mockResp = '{"page":0,"size":10,"totalPages":1,"totalElements":1,"items":[{"id":"686f067b-bf2c-4f24-b82e-e7ee4375008a","name":"Chumbok","orgId":"45ad1c1b-9c1d-469a-9cd2-a1c176c675dc"}]}';
    return of(JSON.parse(mockResp));
  }

  private getUserListMock(): Observable<any> {
    const mockResp = '{"page":0,"size":10,"totalPages":1,"totalElements":1,"items":[{"id":"9388c9ea-f453-41de-96cb-d388dedbf091","username":"admin","firstName":"Admin","lastName":"User","displayName":"Admin User","imageUrl":null,"timezoneId":null,"preferredLanguage":null,"roles":["SUPERADMIN"],"enabled":true}]}';
    return of(JSON.parse(mockResp));
  }


}
