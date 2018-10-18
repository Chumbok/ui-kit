import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from "./user/user.component";
import {LoginComponent} from "./login/login.component";
import {AppLayoutComponent} from "./app-layout/app-layout.component";
import {SiteLayoutComponent} from "./site-layout/site-layout.component";
import {SiteHomeComponent} from "./site-home/site-home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

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
      { path: 'dashboard', component: DashboardComponent },
      { path: 'user', component: UserComponent }
    ]
  },

  //no layout routes
  { path: 'login', component: LoginComponent },

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
