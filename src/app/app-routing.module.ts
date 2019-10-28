import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './componant/auth/login/login.component';
import {AppLayoutComponent} from './layout/app-layout/app-layout.component';
import {SiteLayoutComponent} from './layout/site-layout/site-layout.component';
import {SiteHomeComponent} from './componant/site-home/site-home.component';
import {DashboardComponent} from './componant/dashboard/dashboard.component';
import {AuthGuard} from './guard/auth.guard';
import {NgModule} from '@angular/core';
import {CalendarComponent} from './componant/dentist-point/calendar/calendar.component';
import {CreatePrescriptionComponent} from './componant/dentist-point/create-prescription/create-prescription.component';
import {PrescriptionListComponent} from './componant/dentist-point/prescription-list/prescription-list.component';
import {PrescriptionViewComponent} from './componant/dentist-point/prescription-view/prescription-view.component';
import {CreatePatientComponent} from './componant/dentist-point/create-patient/create-patient.component';
import {CreateAppointmentComponent} from './componant/dentist-point/create-appointment/create-appointment.component';
import {CreateTemplateComponent} from './componant/dentist-point/create-template/create-template.component';
import {SettingsComponent} from './componant/dentist-point/settings/settings.component';
import {EditTemplateComponent} from './componant/dentist-point/edit-template/edit-template.component';
import {AppointmentListComponent} from './componant/dentist-point/appointment-list/appointment-list.component';
import {AppUrl} from './app-url';
import {DoctorLoginComponent} from './componant/dentist-point/auth/doctor-login/doctor-login.component';
import {DoctorSignupComponent} from './componant/dentist-point/auth/doctor-signup/doctor-signup.component';
import {PatientHomeComponent} from './componant/dentist-point/patient-home/patient-home.component';
import {PatientHomeLayoutComponent} from './layout/patient-home-layout/patient-home-layout.component';
import {PatientCreateAppointmentComponent} from './componant/dentist-point-mobiletoweb/patient-create-appointment/patient-create-appointment.component';
import {PatientShowAppointmentComponent} from './componant/dentist-point-mobiletoweb/patient-show-appointment/patient-show-appointment.component';
import {PatientShowPrescriptionComponent} from './componant/dentist-point-mobiletoweb/patient-show-prescription/patient-show-prescription.component';
import {PatientSignupComponent} from './componant/dentist-point/auth/patient-signup/patient-signup.component';
import {PatientViewMedicineComponent} from './componant/dentist-point-mobiletoweb/patient-view-medicine/patient-view-medicine.component';


const routes: Routes = [

  // Site routes
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {path: '', component: SiteHomeComponent, pathMatch: 'full'}
    ]
  },

  // App routes
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
      {path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]},
      {path: '', loadChildren: './uaa/uaa.module#UAAModule'},
      {path: '', loadChildren: './server-manager/server-manager.module#ServerManagerModule'},

      {path: AppUrl.DOCTOR_CALENDER_VIEW, component: CalendarComponent, canActivate: [AuthGuard]},
      {path: AppUrl.DOCTOR_CREATEP_PRESCRIPTION, component: CreatePrescriptionComponent, canActivate: [AuthGuard]},
      {path: AppUrl.DOCTOR_PRESCRIPTION_LIST, component: PrescriptionListComponent, canActivate: [AuthGuard]},
      {path: AppUrl.DOCTOR_APPOINTMENT_LIST, component: AppointmentListComponent, canActivate: [AuthGuard]},
      {path: 'doctors/prescription/:id/prescription-view', component: PrescriptionViewComponent, canActivate: [AuthGuard]},
      {path: AppUrl.DOCTOR_CREATE_TEMPLATE, component: CreateTemplateComponent, canActivate: [AuthGuard]},
      {path: 'doctors/create-appointment', component: CreateAppointmentComponent, canActivate: [AuthGuard]},
      {path: AppUrl.PATIENT_CREATE_PATIENT, component: CreatePatientComponent, canActivate: [AuthGuard]},
      {path: 'doctors/template/:id/edit-template', component: EditTemplateComponent, canActivate: [AuthGuard]},
      // {path: AppUrl.DOCTOR_LOGOUT, component: DoctorLogoutComponent, canActivate: [AuthGuard]},
    ],

  },
  {
    path: '',
    component: PatientHomeLayoutComponent,
    children: [
      {path: AppUrl.PATIENT_HOME, component: PatientHomeComponent, canActivate: [AuthGuard]},
      {path: AppUrl.PATIENT_CREATE_APPOINTMENT, component: PatientCreateAppointmentComponent, canActivate: [AuthGuard]},
      {path: AppUrl.PATIENT_SHOW_APPOINTMENT, component: PatientShowAppointmentComponent, canActivate: [AuthGuard]},
      {path: AppUrl.PATIENT_SHOW_PRESCRIPTION, component: PatientShowPrescriptionComponent, canActivate: [AuthGuard]},
      {
        path: 'patient/prescription/:id/show/medicine-list',
        component: PatientViewMedicineComponent,
        canActivate: [AuthGuard]
      },

    ],
  },

  // No layout routes
  {path: AppUrl.LOGIN, component: LoginComponent},
  {path: AppUrl.DOCTORPOINT_LOGIN, component: DoctorLoginComponent},
  {path: AppUrl.DOCTOR_SIGNUP, component: DoctorSignupComponent},
  {path: 'patient/signUp', component: PatientSignupComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule {
}

