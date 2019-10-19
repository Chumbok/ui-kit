import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './componant/auth/login/login.component';
import {AppLayoutComponent} from './layout/app-layout/app-layout.component';
import {SiteLayoutComponent} from './layout/site-layout/site-layout.component';
import {SiteHomeComponent} from './componant/site-home/site-home.component';
import {DashboardComponent} from './componant/dashboard/dashboard.component';
import {AuthGuard} from './guard/auth.guard';
import {LogoutComponent} from './componant/auth/logout/logout.component';
import {NgModule} from '@angular/core';
import {OrgListComponent} from './componant/user-management/org/org-list/org-list.component';
import {TenantListComponent} from './componant/user-management/tenant/tenant-list/tenant-list.component';
import {UserListComponent} from './componant/user-management/user/user-list/user-list.component';
import {CreateOrgComponent} from './componant/user-management/org/create-org/create-org.component';
import {CreateTenantComponent} from './componant/user-management/tenant/create-tenant/create-tenant.component';
import {CreateUserComponent} from './componant/user-management/user/create-user/create-user.component';
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
import {AppUrl} from "./app-url";
import {DoctorLoginComponent} from "./componant/dentist-point/auth/doctor-login/doctor-login.component";
import {DoctorSignupComponent} from "./componant/dentist-point/auth/doctor-signup/doctor-signup.component";
import {DoctorLogoutComponent} from "./componant/dentist-point/auth/doctor-logout/doctor-logout.component";
import {PatientHomeComponent} from "./componant/dentist-point/patient-home/patient-home.component";


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
      {path: AppUrl.DASHBOARD, component: DashboardComponent, canActivate: [AuthGuard]},
      {path: AppUrl.SETTINGS, component: SettingsComponent, canActivate: [AuthGuard]},

      {path: AppUrl.ORGS, component: OrgListComponent, canActivate: [AuthGuard]},
      {path: AppUrl.ORGS_CREATE, component: CreateOrgComponent, canActivate: [AuthGuard]},
      {path: 'orgs/:id/tenants', component: TenantListComponent, canActivate: [AuthGuard]},
      {path: 'orgs/:id/tenants/create', component: CreateTenantComponent, canActivate: [AuthGuard]},
      {path: 'orgs/:id/tenants/:tid/users', component: UserListComponent, canActivate: [AuthGuard]},
      {path: 'orgs/:id/tenants/:tid/users/create', component: CreateUserComponent, canActivate: [AuthGuard]},
      {path: AppUrl.DOCTOR_CALENDER_VIEW, component: CalendarComponent, canActivate: [AuthGuard]},
      {path: AppUrl.DOCTOR_CREATEP_PRESCRIPTION, component: CreatePrescriptionComponent, canActivate: [AuthGuard]},
      {path: AppUrl.DOCTOR_PRESCRIPTION_LIST, component: PrescriptionListComponent, canActivate: [AuthGuard]},
      {path: AppUrl.DOCTOR_APPOINTMENT_LIST, component: AppointmentListComponent, canActivate: [AuthGuard]},
      {path: 'doctors/prescription/:id/prescription-view', component: PrescriptionViewComponent, canActivate: [AuthGuard]},
      {path: AppUrl.DOCTOR_CREATE_TEMPLATE, component: CreateTemplateComponent, canActivate: [AuthGuard]},
      {path: AppUrl.DOCTOR_LOGOUT, component: DoctorLogoutComponent, canActivate: [AuthGuard]},
      {path: AppUrl.PATIENT_CREATE_PATIENT, component: CreatePatientComponent, canActivate: [AuthGuard]},
      {path: AppUrl.PATIENT_CREATE_APPOINTMENT, component: CreateAppointmentComponent, canActivate: [AuthGuard]},
      {path: AppUrl.PATIENT_CREATE_APPOINTMENT, component: CreateAppointmentComponent, canActivate: [AuthGuard]},
      {path: 'doctors/template/:id/edit-template', component: EditTemplateComponent, canActivate: [AuthGuard]},
    ]
  },

  // No layout routes
  {path: AppUrl.LOGIN, component: LoginComponent},
  {path: AppUrl.PATIENT_HOME, component: PatientHomeComponent},
  {path: AppUrl.LOGOUT, component: LogoutComponent},
  {path: AppUrl.DOCTOR_LOGIN, component: DoctorLoginComponent},
  {path: AppUrl.DOCTOR_SIGNUP, component: DoctorSignupComponent}
  // otherwise redirect to home
  // {path: '**', redirectTo: AppUrl.DOCTOR_CALENDER_VIEW}
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

