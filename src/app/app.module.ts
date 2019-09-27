import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {TemplateHeadComponent} from './layout/app-layout/template-head/template-head.component';
import {TemplateTopnavComponent} from './layout/app-layout/template-topnav/template-topnav.component';
import {TemplateSidenavComponent} from './layout/app-layout/template-sidenav/template-sidenav.component';
import {LoginComponent} from './componant/auth/login/login.component';
import {AppLayoutComponent} from './layout/app-layout/app-layout.component';
import {SiteLayoutComponent} from './layout/site-layout/site-layout.component';
import {SiteHomeComponent} from './componant/site-home/site-home.component';
import {DashboardComponent} from './componant/dashboard/dashboard.component';
import {FlashMessageComponent} from './directives/flash-message/flash-message.component';
import {AuthService} from './service/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {AuthGuard} from './guard/auth.guard';
import {LogoutComponent} from './componant/auth/logout/logout.component';
import {FlashMessageService} from './service/flash-message.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Http401Interceptor} from './interceptor/Http401Interceptor';
import {LoggedInUserInfoService} from './service/logged-in-user-info.service';
import {OrgListComponent} from './componant/user-management/org/org-list/org-list.component';
import {TenantListComponent} from './componant/user-management/tenant/tenant-list/tenant-list.component';
import {UserListComponent} from './componant/user-management/user/user-list/user-list.component';
import {OrgTenantUserService} from './service/org-tenant-user.service';
import {CreateOrgComponent} from './componant/user-management/org/create-org/create-org.component';
import {CreateTenantComponent} from './componant/user-management/tenant/create-tenant/create-tenant.component';
import {CreateUserComponent} from './componant/user-management/user/create-user/create-user.component';
import {CreatePrescriptionComponent} from './componant/dentist-point/create-prescription/create-prescription.component';
import {CreatePatientComponent} from './componant/dentist-point/create-patient/create-patient.component';
import {CalendarComponent} from './componant/dentist-point/calendar/calendar.component';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {AppointmentService} from './service/appointment.service';
import {PrescriptionService} from './service/prescription.service';
import {PrescriptionListComponent} from './componant/dentist-point/prescription-list/prescription-list.component';
import {PrescriptionViewComponent} from './componant/dentist-point/prescription-view/prescription-view.component';
import {CreateAppointmentComponent} from './componant/dentist-point/create-appointment/create-appointment.component';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {CreateTemplateComponent} from './componant/dentist-point/create-template/create-template.component';
import {TemplateService} from './service/template.service';
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
import {AuthHttpService} from './service/auth-http.service';
import {AuthMockService} from './service/auth-mock.service';
import {LoggedInUserInfoHttpService} from './service/logged-in-user-info-http.service';
import {LoggedInUserInfoMockService} from './service/logged-in-user-info-mock.service';
import {SettingsComponent} from './componant/dentist-point/settings/settings.component';
import {AppointmentHttpService} from './service/appointment-http.service';
import {AppointmentMockService} from './service/appointment-mock.service';
import {NgxPaginationModule} from 'ngx-pagination';
import {EditTemplateComponent} from './componant/dentist-point/edit-template/edit-template.component';
import {PrescriptionHttpService} from './service/prescription-http.service';
import {PrescriptionMockService} from './service/prescription-mock.service';
import {TemplateHttpService} from './service/template-http.service';
import {TemplateMockService} from './service/template-mock.service';
import {AppointmentListComponent} from './componant/dentist-point/appointment-list/appointment-list.component';

import {DoctorLoginComponent} from './componant/dentist-point/auth/doctor-login/doctor-login.component';
import {DoctorLogoutComponent} from './componant/dentist-point/auth/doctor-logout/doctor-logout.component';
import {DoctorSignupComponent} from './componant/dentist-point/auth/doctor-signup/doctor-signup.component';
import {DoctorAuthService} from "./service/doctor.auth.service";
import {DoctorAuthHttpService} from "./service/doctor.auth-http.service";
import {DoctorAuthMockService} from "./service/doctor.auth-mock.service";


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
    OwlNativeDateTimeModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN'
    }),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    NgbModalModule

  ],
  declarations: [
    AppComponent,
    TemplateHeadComponent,
    TemplateTopnavComponent,
    TemplateSidenavComponent,
    LoginComponent,
    AppLayoutComponent,
    SiteLayoutComponent,
    SiteHomeComponent,
    DashboardComponent,
    FlashMessageComponent,
    LogoutComponent,
    OrgListComponent,
    TenantListComponent,
    UserListComponent,
    CreateOrgComponent,
    CreateTenantComponent,
    CreateUserComponent,
    CreatePrescriptionComponent,
    CreatePatientComponent,
    CalendarComponent,
    PrescriptionListComponent,
    PrescriptionViewComponent,
    CreateAppointmentComponent,
    CreateTemplateComponent,
    SettingsComponent,
    EditTemplateComponent,
    AppointmentListComponent,
    DoctorLoginComponent,
    DoctorLogoutComponent,
    DoctorSignupComponent,

  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Http401Interceptor,
      multi: true
    },
    {
      provide: AuthService,
      useClass: environment.chumbok.enableMock ? AuthMockService : AuthHttpService
    },
    {
      provide: DoctorAuthService,
      useClass: environment.chumbok.enableMock ? DoctorAuthMockService : DoctorAuthHttpService
    },
    CookieService,
    {
      provide: PingService,
      useClass: environment.chumbok.enableMock ? PingMockService : PingHttpService
    },
    FlashMessageService,
    {
      provide: LoggedInUserInfoService,
      useClass: environment.chumbok.enableMock ? LoggedInUserInfoMockService : LoggedInUserInfoHttpService
    },
    OrgTenantUserService,
    {
      provide: AppointmentService,
      useClass: environment.chumbok.enableMock ? AppointmentMockService : AppointmentHttpService
    },
    {
      provide: PrescriptionService,
      useClass: environment.chumbok.enableMock ? PrescriptionMockService : PrescriptionHttpService
    },
    {
      provide: TemplateService,
      useClass: environment.chumbok.enableMock ? TemplateMockService : TemplateHttpService
    },
    PrescriptionHttpService,
    AppointmentHttpService,
    AppointmentMockService,
    PrescriptionMockService,
    TemplateHttpService,
    TemplateMockService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
