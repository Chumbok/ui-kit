import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './componant/login/login.component';
import {AppLayoutComponent} from './componant/app-layout/app-layout.component';
import {SiteLayoutComponent} from './componant/site-layout/site-layout.component';
import {SiteHomeComponent} from './componant/site-home/site-home.component';
import {DashboardComponent} from './componant/dashboard/dashboard.component';
import {AuthGuard} from './guard/auth.guard';
import {LogoutComponent} from './componant/logout/logout.component';
import {NgModule} from '@angular/core';
import {OrgListComponent} from './componant/org-list/org-list.component';
import {TenantListComponent} from './componant/tenant-list/tenant-list.component';
import {UserListComponent} from './componant/user-list/user-list.component';
import {CreateOrgComponent} from './componant/create-org/create-org.component';
import {CreateTenantComponent} from './componant/create-tenant/create-tenant.component';
import {CreateUserComponent} from './componant/create-user/create-user.component';

const routes: Routes = [

  // Site routes
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: '', component: SiteHomeComponent, pathMatch: 'full' }
    ]
  },

  // App routes
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [ AuthGuard ] },
      { path: 'orgs', component: OrgListComponent, canActivate: [ AuthGuard ] },
      { path: 'orgs/create', component: CreateOrgComponent, canActivate: [ AuthGuard ]},
      { path: 'orgs/:id/tenants', component: TenantListComponent, canActivate: [ AuthGuard ] },
      { path: 'orgs/:id/tenants/create', component: CreateTenantComponent, canActivate: [ AuthGuard ]},
      { path: 'orgs/:id/tenants/:tid/users', component: UserListComponent, canActivate: [ AuthGuard ] },
      {path: 'orgs/:id/tenants/:tid/users/create', component: CreateUserComponent, canActivate: [AuthGuard]}
    ]
  },

  // No layout routes
  { path: 'login', component: LoginComponent },
  {path: 'logout', component: LogoutComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }

