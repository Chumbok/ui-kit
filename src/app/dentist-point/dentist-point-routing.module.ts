import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SiteLayoutComponent} from "../layout/site-layout/site-layout.component";
import {SiteHomeComponent} from "../componant/site-home/site-home.component";
import {AppLayoutComponent} from "../layout/app-layout/app-layout.component";
import {DashboardComponent} from "../componant/dashboard/dashboard.component";
import {AuthGuard} from "../guard/auth.guard";

import {AppUrl} from "../app-url";

import {LoginComponent} from "../uaa/component/login/login.component";
import {LogoutComponent} from "../uaa/component/logout/logout.component";
import {SettingsComponent} from "./component/doctor/settings/settings.component";
import {CalendarComponent} from "./component/doctor/calendar/calendar.component";
import {CreatePrescriptionComponent} from "./component/doctor/create-prescription/create-prescription.component";
import {PrescriptionListComponent} from "./component/doctor/prescription-list/prescription-list.component";
import {AppointmentListComponent} from "./component/doctor/appointment-list/appointment-list.component";
import {PrescriptionViewComponent} from "./component/doctor/prescription-view/prescription-view.component";
import {CreateTemplateComponent} from "./component/doctor/create-template/create-template.component";
import {CreateAppointmentComponent} from "./component/doctor/create-appointment/create-appointment.component";
import {CreatePatientComponent} from "./component/doctor/create-patient/create-patient.component";
import {EditTemplateComponent} from "./component/doctor/edit-template/edit-template.component";
import {PatientHomeLayoutComponent} from "../layout/patient-home-layout/patient-home-layout.component";
import {PatientHomeComponent} from "./component/doctor/patient-home/patient-home.component";
import {DoctorLoginComponent} from "./component/doctor/auth/doctor-login/doctor-login.component";
import {DoctorSignupComponent} from "./component/doctor/auth/doctor-signup/doctor-signup.component";
import {PatientSignupComponent} from "./component/doctor/auth/patient-signup/patient-signup.component";
import {PatientCreateAppointmentComponent} from "./component/patient/patient-create-appointment/patient-create-appointment.component";
import {PatientShowAppointmentComponent} from "./component/patient/patient-show-appointment/patient-show-appointment.component";
import {PatientShowPrescriptionComponent} from "./component/patient/patient-show-prescription/patient-show-prescription.component";
import {PatientViewMedicineComponent} from "./component/patient/patient-view-medicine/patient-view-medicine.component";


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
      {path: '', loadChildren: '../uaa/uaa.module#UAAModule'},
      {path: '', loadChildren: '../server-manager/server-manager.module#ServerManagerModule'},

      {path: AppUrl.DOCTOR_CALENDER_VIEW, component: CalendarComponent, canActivate: [AuthGuard]},
      {path: AppUrl.DOCTOR_CREATEP_PRESCRIPTION, component: CreatePrescriptionComponent, canActivate: [AuthGuard]},
      {path: AppUrl.DOCTOR_PRESCRIPTION_LIST, component: PrescriptionListComponent, canActivate: [AuthGuard]},
      {path: AppUrl.DOCTOR_APPOINTMENT_LIST, component: AppointmentListComponent, canActivate: [AuthGuard]},
      {
        path: 'doctors/prescription/:id/prescription-view',
        component: PrescriptionViewComponent,
        canActivate: [AuthGuard]
      },
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
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: AppUrl.DOCTORPOINT_LOGIN, component: DoctorLoginComponent},
  {path: AppUrl.DOCTOR_SIGNUP, component: DoctorSignupComponent},
  {path: 'patient/signUp', component: PatientSignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DentistPointRoutingModule {
}
