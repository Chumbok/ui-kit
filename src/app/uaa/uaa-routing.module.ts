import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrgListComponent} from './component/org/org-list/org-list.component';
import {CreateOrgComponent} from './component/org/create-org/create-org.component';
import {TenantListComponent} from './component/tenant/tenant-list/tenant-list.component';
import {CreateTenantComponent} from './component/tenant/create-tenant/create-tenant.component';
import {UserListComponent} from './component/user/user-list/user-list.component';
import {CreateUserComponent} from './component/user/create-user/create-user.component';
import {AuthGuard} from '../shared/guard/auth.guard';

const routes: Routes = [

  {path: 'orgs', component: OrgListComponent, canActivate: [AuthGuard]},
  {path: 'orgs/create', component: CreateOrgComponent, canActivate: [AuthGuard]},
  {path: 'orgs/:id/tenants', component: TenantListComponent, canActivate: [AuthGuard]},
  {path: 'orgs/:id/tenants/create', component: CreateTenantComponent, canActivate: [AuthGuard]},
  {path: 'orgs/:id/tenants/:tid/users', component: UserListComponent, canActivate: [AuthGuard]},
  {path: 'orgs/:id/tenants/:tid/users/create', component: CreateUserComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UAARoutingModule {
}
