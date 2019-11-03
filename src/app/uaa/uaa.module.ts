import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {OrgListComponent} from './component/org/org-list/org-list.component';
import {TenantListComponent} from './component/tenant/tenant-list/tenant-list.component';
import {UserListComponent} from './component/user/user-list/user-list.component';
import {CreateOrgComponent} from './component/org/create-org/create-org.component';
import {CreateTenantComponent} from './component/tenant/create-tenant/create-tenant.component';
import {CreateUserComponent} from './component/user/create-user/create-user.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MenuService} from '../service/menu.service';
import {environment} from '../../environments/environment';
import {MenuDefaultService} from '../service/menu-default.service';
import {OrgTenantUserMockService} from './service/org-tenant-user-mock.service';
import {OrgTenantUserService} from './service/org-tenant-user';
import {OrgTenantUserHttpService} from './service/org-tenant-user-http.service';
import {LoginComponent} from './component/login/login.component';
import {LogoutComponent} from './component/logout/logout.component';
import {AuthService} from './service/auth.service';
import {AuthHttpService} from './service/auth-http.service';
import {AuthMockService} from './service/auth-mock.service';
import {UserInfoService} from './service/user-info.service';
import {UserInfoMockService} from './service/user-info-mock.service';
import {UserInfoHttpService} from './service/user-info-http.service';
import {UAARoutingModule} from './uaa-routing.module';

@NgModule({
  declarations: [
    OrgListComponent,
    TenantListComponent,
    UserListComponent,
    CreateOrgComponent,
    CreateTenantComponent,
    CreateUserComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UAARoutingModule
  ],
  providers: [
    {
      provide: AuthService,
      useClass: environment.chumbok.enableMock ? AuthMockService : AuthHttpService
    },
    {
      provide: UserInfoService,
      useClass: environment.chumbok.enableMock ? UserInfoMockService : UserInfoHttpService
    },
    {
      provide: OrgTenantUserService,
      useClass: environment.chumbok.enableMock ? OrgTenantUserMockService : OrgTenantUserHttpService
    },
    {
      provide: MenuService,
      useClass: MenuDefaultService
    },
  ]
})
export class UAAModule {
}
