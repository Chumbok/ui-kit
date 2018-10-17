import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TemplateHeadComponent } from './template-head.component';
import { TemplateTopnavComponent } from './template-topnav.component';
import { TemplateSidenavComponent } from './template-sidenav.component';
import { UserComponent } from './user/user.component';
import { User1Component } from './user1/user1.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateHeadComponent,
    TemplateTopnavComponent,
    TemplateSidenavComponent,
    UserComponent,
    User1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    TemplateHeadComponent,
    TemplateTopnavComponent,
    TemplateSidenavComponent
  ]
})
export class AppModule { }
