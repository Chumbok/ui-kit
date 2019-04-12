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
import {PingService} from './service/ping.service';
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
import {CreateTemplateComponent} from "./componant/dentist-point/create-template/create-template.component";
import {TemplateService} from "./service/template.service";
import {CreateAppointmentService} from "./service/create-appointment.service";
import {TimeslotService} from "./service/timeslot.service";
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
    CreateTemplateComponent

  ],
  providers: [
    AuthService,
    CookieService,
    PingService,
    FlashMessageService,
    LoggedInUserInfoService,
    OrgTenantUserService,
    AppointmentService,
    TemplateService,
    TimeslotService,
    PrescriptionService,
    CreateAppointmentService,
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
