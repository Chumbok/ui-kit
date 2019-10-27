import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UAARoutingModule} from './uaa-routing.module';
import {OrgListComponent} from './component/org/org-list/org-list.component';
import {TenantListComponent} from './component/tenant/tenant-list/tenant-list.component';
import {UserListComponent} from './component/user/user-list/user-list.component';
import {CreateOrgComponent} from './component/org/create-org/create-org.component';
import {CreateTenantComponent} from './component/tenant/create-tenant/create-tenant.component';
import {CreateUserComponent} from './component/user/create-user/create-user.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OrgTenantUserService} from './service/org-tenant-user.service';
import {MenuService} from '../service/menu.service';
import {environment} from '../../environments/environment';
import {MenuDentistPointDoctorService} from '../service/menu-dentist-point-doctor.service';
import {MenuUaaService} from './service/menu-uaa.service';
import {MenuDefaultService} from '../service/menu-default.service';

@NgModule({
  declarations: [
    OrgListComponent,
    TenantListComponent,
    UserListComponent,
    CreateOrgComponent,
    CreateTenantComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UAARoutingModule
  ],
  providers: [
    OrgTenantUserService,
    {
      provide: MenuService,
      useClass: environment.chumbok.appName === 'uaa' ? MenuUaaService : MenuDefaultService
    },
  ]
})
export class UAAModule {
}
