import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DbConnectionService} from '../../service/db-connection.service';
import {CreateDbConnection} from '../../model/create-db-connection';

@Component({
  selector: 'app-create-db-connections',
  templateUrl: './create-db-connections.component.html',
  styleUrls: ['./create-db-connections.component.css']
})
export class CreateDbConnectionsComponent implements OnInit {

  form: FormGroup;
  returnUrl: string;
  submitted = false;
  serverError = '';
  sshConnections = [];

  constructor(private formBuilder: FormBuilder,
              private dbConnectionService: DbConnectionService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

    this.form = this.formBuilder.group({
      connectionName: ['', Validators.required],
      serverHost: ['', Validators.required],
      port: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      databaseSchema: ['', Validators.required],
      overSshTunnel: [false],
      sshConnectionId: [''],
    });

    this.sshConnections = [
      {
        id: '1234',
        name: 'ssh conn1'
      },
      {
        id: '9876',
        name: 'ssh conn2'
      },
    ];
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  get f() {
    return this.form.controls;
  }

  public onSubmit(): void {

    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const createDbConnection: CreateDbConnection = new CreateDbConnection();
    createDbConnection.connectionName = this.form.controls['connectionName'].value;
    createDbConnection.serverHost = this.form.controls['serverHost'].value;
    createDbConnection.port = this.form.controls['port'].value;
    createDbConnection.username = this.form.controls['username'].value;
    createDbConnection.password = this.form.controls['password'].value;
    createDbConnection.databaseSchema = this.form.controls['databaseSchema'].value;
    createDbConnection.overSshTunnel = this.form.controls['overSshTunnel'].value;
    createDbConnection.sshConnectionId = this.form.controls['sshConnectionId'].value;

    this.dbConnectionService.createDbConnection(createDbConnection).subscribe(res => {
      // TODO: flush message.
    }, error => {
      if (error.status !== 200) {
        if (error.error['message'] !== undefined) {
          this.serverError = error.error.message;
        } else {
          this.serverError = 'Could not process this request. Contact administrator.';
        }
      }
    });
  }
}
