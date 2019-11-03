import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ServerManagerRoutingModule} from './server-manager-routing.module';
import {InitMasterKeyComponent} from './component/init-master-key/init-master-key.component';
import {DbConnectionListComponent} from './component/db-connection-list/db-connection-list.component';
import {CreateDbConnectionsComponent} from './component/create-db-connections/create-db-connections.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MenuService} from '../service/menu.service';
import {MenuDefaultService} from '../service/menu-default.service';
import {SshConnectionListComponent} from './component/ssh-connection-list/ssh-connection-list.component';
import {CreateSshConnectionsComponent} from './component/create-ssh-connections/create-ssh-connections.component';
import {DbBackupJobListComponent} from './component/db-backup-job-list/db-backup-job-list.component';
import {FileBackupJobListComponent} from './component/file-backup-job-list/file-backup-job-list.component';
import {CreateFileBackupJobsComponent} from './component/create-file-backup-jobs/create-file-backup-jobs.component';
import {CreateDbBackupJobsComponent} from './component/create-db-backup-jobs/create-db-backup-jobs.component';
import {NotificationListComponent} from './component/notification-list/notification-list.component';

@NgModule({
  declarations: [
    InitMasterKeyComponent,
    DbConnectionListComponent,
    CreateDbConnectionsComponent,
    SshConnectionListComponent,
    CreateSshConnectionsComponent,
    DbBackupJobListComponent,
    FileBackupJobListComponent,
    CreateFileBackupJobsComponent,
    CreateDbBackupJobsComponent,
    NotificationListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ServerManagerRoutingModule
  ],
  providers: [
    {
      provide: MenuService,
      useClass: MenuDefaultService
    },
  ]
})
export class ServerManagerModule {
}
