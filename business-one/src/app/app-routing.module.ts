import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {UserComponent} from "./user/user.component";
import {User1Component} from "./user1/user1.component";

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  {
    path: 'user',
    component: User1Component,
  },
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
