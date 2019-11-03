import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import {DentistPointRoutingModule} from './dentist-point-routing.module';
import {FlashMessageComponent} from '../directives/flash-message/flash-message.component';
import {DentistPointDoctorMenuComponent} from '../layout/app-layout/dentist-point-doctor-menu/dentist-point-doctor-menu.component';
import {DentistPointPatientMenuComponent} from '../layout/app-layout/dentist-point-patient-menu/dentist-point-patient-menu.component';
import {environment} from '../../environments/environment';
import {DoctorAuthService} from './services/doctor.auth.service';
import {DoctorAuthMockService} from './services/doctor.auth-mock.service';
import {DoctorAuthHttpService} from './services/doctor.auth-http.service';
import {PatientAuthService} from './services/patient.auth.service';
import {PatientAuthMockService} from './services/patient.auth-mock.service';
import {PatientAuthHttpService} from './services/patient.auth-http.service';
import {AppointmentMockService} from './services/appointment-mock.service';
import {AppointmentHttpService} from './services/appointment-http.service';
import {PrescriptionService} from './services/prescription.service';
import {PrescriptionMockService} from './services/prescription-mock.service';
import {PrescriptionHttpService} from './services/prescription-http.service';
import {TemplateService} from './services/template.service';
import {TemplateMockService} from './services/template-mock.service';
import {TemplateHttpService} from './services/template-http.service';
import {MenuService} from '../service/menu.service';
import {MenuDefaultService} from '../service/menu-default.service';
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
import {FlashMessageService} from '../service/flash-message.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {OwlDateTimeModule} from 'ng-pick-datetime';
import {CalendarCommonModule, CalendarDayModule, CalendarMonthModule, CalendarWeekModule} from 'angular-calendar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {AppointmentService} from './services/appointment.service';
import {DashboardComponent} from '../componant/dashboard/dashboard.component';

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
