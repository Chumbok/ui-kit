import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CalendarComponent} from './component/doctor/calendar/calendar.component';
import {CreatePrescriptionComponent} from './component/doctor/create-prescription/create-prescription.component';
import {PrescriptionListComponent} from './component/doctor/prescription-list/prescription-list.component';
import {AppointmentListComponent} from './component/doctor/appointment-list/appointment-list.component';
import {PrescriptionViewComponent} from './component/doctor/prescription-view/prescription-view.component';
import {CreateTemplateComponent} from './component/doctor/create-template/create-template.component';
import {CreateAppointmentComponent} from './component/doctor/create-appointment/create-appointment.component';
import {EditTemplateComponent} from './component/doctor/edit-template/edit-template.component';
import {PatientCreateAppointmentComponent} from './component/patient/patient-create-appointment/patient-create-appointment.component';
import {PatientShowAppointmentComponent} from './component/patient/patient-show-appointment/patient-show-appointment.component';
import {PatientShowPrescriptionComponent} from './component/patient/patient-show-prescription/patient-show-prescription.component';
import {PatientViewMedicineComponent} from './component/patient/patient-view-medicine/patient-view-medicine.component';
import {AppUrl} from './app-url';
import {AuthGuard} from '../shared/guard/auth.guard';


const routes: Routes = [

  {path: 'doctors/calendar-view', component: CalendarComponent, canActivate: [AuthGuard]},
  {path: AppUrl.DOCTOR_CREATEP_PRESCRIPTION, component: CreatePrescriptionComponent, canActivate: [AuthGuard]},
  {path: AppUrl.DOCTOR_PRESCRIPTION_LIST, component: PrescriptionListComponent, canActivate: [AuthGuard]},
  {path: AppUrl.DOCTOR_APPOINTMENT_LIST, component: AppointmentListComponent, canActivate: [AuthGuard]},
  {path: 'doctors/prescription/:id/prescription-view', component: PrescriptionViewComponent, canActivate: [AuthGuard]},
  {path: AppUrl.DOCTOR_CREATE_TEMPLATE, component: CreateTemplateComponent, canActivate: [AuthGuard]},
  {path: 'doctors/create-appointment', component: CreateAppointmentComponent, canActivate: [AuthGuard]},
  {path: 'doctors/template/:id/edit-template', component: EditTemplateComponent, canActivate: [AuthGuard]},
  // {path: AppUrl.DOCTOR_LOGOUT, component: DoctorLogoutComponent, canActivate: [AuthGuard]},
  {path: AppUrl.PATIENT_CREATE_APPOINTMENT, component: PatientCreateAppointmentComponent, canActivate: [AuthGuard]},
  {path: AppUrl.PATIENT_SHOW_APPOINTMENT, component: PatientShowAppointmentComponent, canActivate: [AuthGuard]},
  {path: AppUrl.PATIENT_SHOW_PRESCRIPTION, component: PatientShowPrescriptionComponent, canActivate: [AuthGuard]},
  {path: AppUrl.PATIENT_MEDICINE_LIST, component: PatientViewMedicineComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DentistPointRoutingModule {
}
