import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user/user.component';
import {LoginComponent} from './login/login.component';
import {AppLayoutComponent} from './app-layout/app-layout.component';
import {SiteLayoutComponent} from './site-layout/site-layout.component';
import {SiteHomeComponent} from './site-home/site-home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from './guard/auth.guard';
import {LogoutComponent} from './logout/logout.component';
import {NgModule} from '@angular/core';
import {OrgListComponent} from './org-list/org-list.component';
import {TenantListComponent} from './tenant-list/tenant-list.component';
import {UserListComponent} from './user-list/user-list.component';

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
      { path: 'orgs/:id/tenants', component: TenantListComponent, canActivate: [AuthGuard] },
      { path: 'orgs/:id/tenants/:tid/users', component: UserListComponent, canActivate: [AuthGuard] },
      { path: 'user', component: UserComponent, canActivate: [ AuthGuard ] }
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

