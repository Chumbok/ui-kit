import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgFlashMessagesModule} from 'ng-flash-messages';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {environment} from '../environments/environment';
import {NgxPaginationModule} from 'ngx-pagination';
import {DatePipe} from '@angular/common';
import {UAAModule} from './uaa/uaa.module';
import {ServerManagerModule} from './server-manager/server-manager.module';
import {DentistPointModule} from './dentist-point/dentist-point.module';
import {TemplateHeadComponent} from './shared/layout/app-layout/template-head/template-head.component';
import {TemplateTopnavComponent} from './shared/layout/app-layout/template-topnav/template-topnav.component';
import {TemplateSidenavComponent} from './shared/layout/app-layout/template-sidenav/template-sidenav.component';
import {AppLayoutComponent} from './shared/layout/app-layout/app-layout.component';
import {SiteLayoutComponent} from './shared/layout/site-layout/site-layout.component';
import {SiteHomeComponent} from './shared/componant/site-home/site-home.component';
import {AuthGuard} from './shared/guard/auth.guard';
import {Http401Interceptor} from './shared/interceptor/Http401Interceptor';
import {AuthTokenService} from './shared/service/auth-token.service';
import {AuthTokenMockService} from './shared/service/auth-token-mock.service';
import {AuthTokenHttpService} from './shared/service/auth-token-http.service';
import {LoggedInUserInfoService} from './shared/service/logged-in-user-info.service';
import {LoggedInUserInfoMockService} from './shared/service/logged-in-user-info-mock.service';
import {LoggedInUserInfoHttpService} from './shared/service/logged-in-user-info-http.service';
import {PingService} from './shared/service/ping.service';
import {PingMockService} from './shared/service/ping-mock.service';
import {PingHttpService} from './shared/service/ping-http.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    OwlDateTimeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    NgxPaginationModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    Ng2SearchPipeModule,
    MatExpansionModule,
    MatGridListModule,
    SweetAlert2Module.forRoot(),
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    NgFlashMessagesModule.forRoot(),
    OwlNativeDateTimeModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF_TOKEN',
      headerName: 'X-XSRF-TOKEN'
    }),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    NgbModalModule,
    UAAModule,
    ServerManagerModule,
    DentistPointModule
  ],
  declarations: [
    AppComponent,
    TemplateHeadComponent,
    TemplateTopnavComponent,
    TemplateSidenavComponent,
    AppLayoutComponent,
    SiteLayoutComponent,
    SiteHomeComponent
  ],
  providers: [
    DatePipe,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Http401Interceptor,
      multi: true
    },
    {
      provide: AuthTokenService,
      useClass: environment.chumbok.enableMock ? AuthTokenMockService : AuthTokenHttpService
    },
    {
      provide: LoggedInUserInfoService,
      useClass: environment.chumbok.enableMock ? LoggedInUserInfoMockService : LoggedInUserInfoHttpService
    },
    CookieService,
    {
      provide: PingService,
      useClass: environment.chumbok.enableMock ? PingMockService : PingHttpService
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}
