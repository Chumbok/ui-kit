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
import {SiteLayoutComponent} from './site-layout/site-layout.component';
import {SiteHomeComponent} from './site-home/site-home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FlashMessageComponent} from './flash-message/flash-message.component';
import {AuthService} from './service/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {AuthGuard} from './guard/auth.guard';
import {LogoutComponent} from './logout/logout.component';
import {PingService} from './service/ping.service';
import {FlashMessageService} from './service/flash-message.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Http401Interceptor} from './interceptor/Http401Interceptor';
import {LoggedInUserInfoService} from './service/logged-in-user-info.service';
import { OrgListComponent } from './org-list/org-list.component';
import {OrgService} from './service/org.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    TemplateHeadComponent,
    TemplateTopnavComponent,
    TemplateSidenavComponent,
    UserComponent,
    LoginComponent,
    AppLayoutComponent,
    SiteLayoutComponent,
    SiteHomeComponent,
    DashboardComponent,
    FlashMessageComponent,
    LogoutComponent,
    OrgListComponent
  ],
  providers: [
    AuthService,
    CookieService,
    PingService,
    FlashMessageService,
    LoggedInUserInfoService,
    OrgService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Http401Interceptor,
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
