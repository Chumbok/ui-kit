import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {TemplateHeadComponent} from './layout/app-layout/template-head/template-head.component';
import {TemplateTopnavComponent} from './layout/app-layout/template-topnav/template-topnav.component';
import {TemplateSidenavComponent} from './layout/app-layout/template-sidenav/template-sidenav.component';
import {AppLayoutComponent} from './layout/app-layout/app-layout.component';
import {SiteLayoutComponent} from './layout/site-layout/site-layout.component';
import {SiteHomeComponent} from './componant/site-home/site-home.component';
import {NgFlashMessagesModule} from 'ng-flash-messages';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {AuthGuard} from './guard/auth.guard';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Http401Interceptor} from './interceptor/Http401Interceptor';
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
  MatTreeModule,
} from '@angular/material';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {environment} from '../environments/environment';
import {PingHttpService} from './service/ping-http.service';
import {PingMockService} from './service/ping-mock.service';
import {PingService} from './service/ping.service';
import {NgxPaginationModule} from 'ngx-pagination';

import {DatePipe} from '@angular/common';
import {UAAModule} from './uaa/uaa.module';
import {ServerManagerModule} from './server-manager/server-manager.module';
import {AuthTokenService} from './service/auth-token.service';
import {AuthTokenMockService} from './service/auth-token-mock.service';
import {AuthTokenHttpService} from './service/auth-token-http.service';
import {LoggedInUserInfoMockService} from './service/logged-in-user-info-mock.service';
import {LoggedInUserInfoHttpService} from './service/logged-in-user-info-http.service';
import {LoggedInUserInfoService} from './service/logged-in-user-info.service';
import {DentistPointModule} from "./dentist-point/dentist-point.module";


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
