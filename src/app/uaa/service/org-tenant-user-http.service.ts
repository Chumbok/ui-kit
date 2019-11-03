import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {environment} from '../../../environments/environment';
import {OrgTenantUserService} from './org-tenant-user';
import {AuthTokenService} from '../../shared/service/auth-token.service';

@Injectable({providedIn: 'root'})
export class OrgTenantUserHttpService implements OrgTenantUserService {

  private uaaApiBaseEndpoint: string = environment.chumbok.uaaApiBaseEndpoint;
  private orgListEndpoint: string = this.uaaApiBaseEndpoint + '/orgs';

  private httpOptions = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.authService.getAuthToken()})
  };

  private authHeader = new HttpHeaders({'Authorization': 'Bearer ' + this.authService.getAuthToken()});

  constructor(private authService: AuthTokenService, private http: HttpClient) {
  }

  public getOrgList(): Observable<any> {
    return this.http.get<any>(this.orgListEndpoint, this.httpOptions);
  }

  public createOrg(name: string): Observable<any> {
    return this.http.post<any>(this.orgListEndpoint, {name: name},
      {withCredentials: true, headers: this.authHeader});
  }

  public getTenantList(orgId: string): Observable<any> {
    return this.http.get<any>(this.uaaApiBaseEndpoint + '/orgs/' + orgId + '/tenants', this.httpOptions);
  }

  public createTenant(orgId: string, name: string): Observable<any> {
    return this.http.post<any>(this.uaaApiBaseEndpoint + '/orgs/' + orgId + '/tenants', {name: name},
      {withCredentials: true, headers: this.authHeader});
  }

  public getUserList(orgId: string, tenantId: string): Observable<any> {
    return this.http.get<any>(this.uaaApiBaseEndpoint + '/orgs/' + orgId + '/tenants/' + tenantId + '/users',
      this.httpOptions);
  }

  public createUser(orgId: string, tenantId: string, user: User): Observable<any> {
    return this.http.post<any>(this.uaaApiBaseEndpoint + '/orgs/' + orgId + '/tenants/' + tenantId + '/users', user,
      {withCredentials: true, headers: this.authHeader});
  }
}
