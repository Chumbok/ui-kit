import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateHeadComponent } from './template-head.component';
import { TemplateTopnavComponent } from './template-topnav.component';
import { TemplateSidenavComponent } from './template-sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateHeadComponent,
    TemplateTopnavComponent,
    TemplateSidenavComponent
  ],
  imports: [
    BrowserModule
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
