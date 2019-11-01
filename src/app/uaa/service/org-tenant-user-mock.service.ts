import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {OrgTenantUserService} from './org-tenant-user';
import {User} from '../model/user';

@Injectable({providedIn: 'root'})
export class OrgTenantUserMockService implements OrgTenantUserService {

  constructor() {
  }

  public getOrgList(): Observable<any> {

    const mockOrgList = {
      page: 0,
      size: 10,
      totalPages: 1,
      totalElements: 1,
      items: [
        {
          id: '45ad1c1b-9c1d-469a-9cd2-a1c176c675dc',
          name: 'Chumbok'
        }]
    };

    return of(mockOrgList);
  }

  public createOrg(name: string): Observable<any> {
    return of({});
  }

  public getTenantList(orgId: string): Observable<any> {

    const mockTenantList = {
      page: 0,
      size: 10,
      totalPages: 1,
      totalElements: 1,
      items: [
        {
          id: '686f067b-bf2c-4f24-b82e-e7ee4375008a',
          name: 'Chumbok',
          orgId: '45ad1c1b-9c1d-469a-9cd2-a1c176c675dc'
        }]
    };

    return of(mockTenantList);
  }

  public createTenant(orgId: string, name: string): Observable<any> {
    return of({});
  }

  public getUserList(orgId: string, tenantId: string): Observable<any> {

    const mockUserList = {
      page: 0,
      size: 10,
      totalPages: 1,
      totalElements: 1,
      items: [{
        id: '9388c9ea-f453-41de-96cb-d388dedbf091',
        username: 'admin',
        firstName: 'Admin',
        lastName: 'User',
        displayName: 'Admin User',
        imageUrl: null,
        timezoneId: null,
        preferredLanguage: null,
        roles: ['SUPERADMIN'],
        enabled: true
      }]
    };

    return of(mockUserList);
  }

  public createUser(orgId: string, tenantId: string, user: User): Observable<any> {
    return of({});
  }

}
