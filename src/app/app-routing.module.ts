import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from "./user/user.component";
import {LoginComponent} from "./login/login.component";
import {AppLayoutComponent} from "./app-layout/app-layout.component";

const routes: Routes = [

  // App routes goes here here
  {
    path: '',
    component: AppLayoutComponent,
    children: [
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
