import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateHeadComponent } from './template-head.component';
import { TemplateScriptsComponent } from './template-scripts.component';
import { TemplateTopnavComponent } from './template-topnav.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateHeadComponent,
    TemplateScriptsComponent,
    TemplateTopnavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    TemplateHeadComponent,
    TemplateScriptsComponent,
    TemplateTopnavComponent
  ]
})
export class AppModule { }
