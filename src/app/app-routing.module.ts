import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SiteLayoutComponent} from './layout/site-layout/site-layout.component';
import {SiteHomeComponent} from './componant/site-home/site-home.component';
import {AppLayoutComponent} from './layout/app-layout/app-layout.component';
import {DashboardComponent} from './componant/dashboard/dashboard.component';
import {AuthGuard} from './guard/auth.guard';
import {SettingsComponent} from './dentist-point/component/doctor/settings/settings.component';
import {LoginComponent} from './uaa/component/login/login.component';
import {LogoutComponent} from './uaa/component/logout/logout.component';
import {DoctorLoginComponent} from './dentist-point/component/doctor/auth/doctor-login/doctor-login.component';
import {DoctorSignupComponent} from './dentist-point/component/doctor/auth/doctor-signup/doctor-signup.component';
import {PatientSignupComponent} from './dentist-point/component/doctor/auth/patient-signup/patient-signup.component';


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
      {path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]}
    ],
  },

  {
    path: 'uaa',
    component: AppLayoutComponent,
    children: [
      {path: '', loadChildren: './uaa/uaa.module#UAAModule'},
    ]
  },

  {
    path: 'dentist-point',
    component: AppLayoutComponent,
    children: [
      {path: '', loadChildren: './dentist-point/dentist-point.module#DentistPointModule'}
    ]
  },
  {
    path: 'dentist-point',
    children: [
      {path: 'doctorpoint/login', component: DoctorLoginComponent},
      {path: 'doctors/signUp', component: DoctorSignupComponent},
      {path: 'patient/signUp', component: PatientSignupComponent}
    ]
  },

  {
    path: 'server-manager',
    component: AppLayoutComponent,
    children: [
      {path: '', loadChildren: './server-manager/server-manager.module#ServerManagerModule'},
    ]
  },

  // No layout routes
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule {
}

