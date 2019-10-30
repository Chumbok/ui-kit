import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../model/user';

@Injectable()
export abstract class OrgTenantUserService {

  abstract getOrgList(): Observable<any>;

  abstract createOrg(name: string): Observable<any>;

  abstract getTenantList(orgId: string): Observable<any>;

  abstract createTenant(orgId: string, name: string): Observable<any>;

  abstract getUserList(orgId: string, tenantId: string): Observable<any>;

  abstract createUser(orgId: string, tenantId: string, user: User): Observable<any>;
}
