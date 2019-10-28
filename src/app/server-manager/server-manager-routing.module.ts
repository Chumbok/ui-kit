import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../guard/auth.guard';
import {InitMasterKeyComponent} from './component/init-master-key/init-master-key.component';
import {DbConnectionListComponent} from './component/db-connection-list/db-connection-list.component';
import {SshConnectionListComponent} from './component/ssh-connection-list/ssh-connection-list.component';
import {CreateDbConnectionsComponent} from './component/create-db-connections/create-db-connections.component';
import {CreateSshConnectionsComponent} from './component/create-ssh-connections/create-ssh-connections.component';
import {DbBackupJobListComponent} from './component/db-backup-job-list/db-backup-job-list.component';
import {FileBackupJobListComponent} from './component/file-backup-job-list/file-backup-job-list.component';
import {CreateDbBackupJobsComponent} from './component/create-db-backup-jobs/create-db-backup-jobs.component';
import {CreateFileBackupJobsComponent} from './component/create-file-backup-jobs/create-file-backup-jobs.component';
import {NotificationListComponent} from './component/notification-list/notification-list.component';

const routes: Routes = [
  {
    path: 'init-master-key',
    component: InitMasterKeyComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'db-connection-list',
    component: DbConnectionListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-db-connections',
    component: CreateDbConnectionsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ssh-connection-list',
    component: SshConnectionListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-ssh-connections',
    component: CreateSshConnectionsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'db-backup-job-list',
    component: DbBackupJobListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-db-backup-jobs',
    component: CreateDbBackupJobsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'file-backup-job-list',
    component: FileBackupJobListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-file-backup-jobs',
    component: CreateFileBackupJobsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'notification-list',
    component: NotificationListComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServerManagerRoutingModule {
}
