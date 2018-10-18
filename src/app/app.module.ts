import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {TemplateHeadComponent} from './template-head/template-head.component';
import {TemplateTopnavComponent} from './template-topnav/template-topnav.component';
import {TemplateSidenavComponent} from './template-sidenav/template-sidenav.component';
import {UserComponent} from './user/user.component';
import {LoginComponent} from './login/login.component';
import {AppLayoutComponent} from './app-layout/app-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateHeadComponent,
    TemplateTopnavComponent,
    TemplateSidenavComponent,
    UserComponent,
    LoginComponent,
    AppLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
