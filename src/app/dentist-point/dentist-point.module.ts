import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import {DentistPointRoutingModule} from './dentist-point-routing.module';
import {CreatePrescriptionComponent} from './component/doctor/create-prescription/create-prescription.component';
import {CreatePatientComponent} from './component/doctor/create-patient/create-patient.component';
import {CreateAppointmentComponent} from './component/doctor/create-appointment/create-appointment.component';
import {CalendarComponent} from './component/doctor/calendar/calendar.component';
import {PrescriptionListComponent} from './component/doctor/prescription-list/prescription-list.component';
import {SettingsComponent} from './component/doctor/settings/settings.component';
import {CreateTemplateComponent} from './component/doctor/create-template/create-template.component';
import {PrescriptionViewComponent} from './component/doctor/prescription-view/prescription-view.component';
import {EditTemplateComponent} from './component/doctor/edit-template/edit-template.component';
import {AppointmentListComponent} from './component/doctor/appointment-list/appointment-list.component';
import {DoctorLoginComponent} from './component/doctor/auth/doctor-login/doctor-login.component';
import {DoctorLogoutComponent} from './component/doctor/auth/doctor-logout/doctor-logout.component';
import {DoctorSignupComponent} from './component/doctor/auth/doctor-signup/doctor-signup.component';
import {PatientSignupComponent} from './component/doctor/auth/patient-signup/patient-signup.component';
import {PatientCreateAppointmentComponent} from './component/patient/patient-create-appointment/patient-create-appointment.component';
import {PatientViewMedicineComponent} from './component/patient/patient-view-medicine/patient-view-medicine.component';
import {PatientShowPrescriptionComponent} from './component/patient/patient-show-prescription/patient-show-prescription.component';
import {PatientShowAppointmentComponent} from './component/patient/patient-show-appointment/patient-show-appointment.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {OwlDateTimeModule} from 'ng-pick-datetime';
import {CalendarCommonModule, CalendarDayModule, CalendarMonthModule, CalendarWeekModule} from 'angular-calendar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {DashboardComponent} from '../shared/componant/dashboard/dashboard.component';
import {FlashMessageComponent} from '../shared/directives/flash-message/flash-message.component';
import {DentistPointDoctorMenuComponent} from '../shared/layout/app-layout/dentist-point-doctor-menu/dentist-point-doctor-menu.component';
import {DentistPointPatientMenuComponent} from '../shared/layout/app-layout/dentist-point-patient-menu/dentist-point-patient-menu.component';
import {DoctorAuthService} from './service/doctor.auth.service';
import {DoctorAuthMockService} from './service/doctor.auth-mock.service';
import {DoctorAuthHttpService} from './service/doctor.auth-http.service';
import {environment} from '../../environments/environment';
import {PatientAuthService} from './service/patient.auth.service';
import {PatientAuthMockService} from './service/patient.auth-mock.service';
import {PatientAuthHttpService} from './service/patient.auth-http.service';
import {PrescriptionHttpService} from './service/prescription-http.service';
import {PrescriptionMockService} from './service/prescription-mock.service';
import {PrescriptionService} from './service/prescription.service';
import {TemplateService} from './service/template.service';
import {TemplateMockService} from './service/template-mock.service';
import {TemplateHttpService} from './service/template-http.service';
import {AppointmentHttpService} from './service/appointment-http.service';
import {AppointmentMockService} from './service/appointment-mock.service';
import {AppointmentService} from './service/appointment.service';
import {MenuService} from '../shared/service/menu.service';
import {MenuDefaultService} from '../shared/service/menu-default.service';
import {FlashMessageService} from '../shared/service/flash-message.service';

@NgModule({
  declarations: [
    DashboardComponent,
    FlashMessageComponent,
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
    PatientCreateAppointmentComponent,
    PatientShowAppointmentComponent,
    PatientShowPrescriptionComponent,
    PatientSignupComponent,
    PatientViewMedicineComponent,
    DentistPointDoctorMenuComponent,
    DentistPointPatientMenuComponent,
    FlashMessageComponent
  ],
  providers: [
    DatePipe,
    {
      provide: DoctorAuthService,
      useClass: environment.chumbok.enableMock ? DoctorAuthMockService : DoctorAuthHttpService
    },
    {
      provide: PatientAuthService,
      useClass: environment.chumbok.enableMock ? PatientAuthMockService : PatientAuthHttpService
    },
    {
      provide: PrescriptionService,
      useClass: environment.chumbok.enableMock ? PrescriptionMockService : PrescriptionHttpService
    },
    {
      provide: TemplateService,
      useClass: environment.chumbok.enableMock ? TemplateMockService : TemplateHttpService
    },
    {
      provide: AppointmentService,
      useClass: environment.chumbok.enableMock ? AppointmentMockService : AppointmentHttpService
    },

    PrescriptionHttpService,
    AppointmentHttpService,
    AppointmentMockService,
    PrescriptionMockService,
    TemplateHttpService,
    TemplateMockService,
    {
      provide: MenuService,
      useClass: MenuDefaultService
    },
    FlashMessageService
  ],
  exports: [
    FlashMessageComponent
  ],
  imports: [
    CommonModule,
    DentistPointRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    OwlDateTimeModule,
    CalendarCommonModule,
    CalendarMonthModule,
    CalendarWeekModule,
    CalendarDayModule,
    MatAutocompleteModule,
    Ng2SearchPipeModule
  ]
})
export class DentistPointModule {
}
