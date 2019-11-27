import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {DbConnection} from '../model/db-connection';
import {CreateDbConnection} from '../model/create-db-connection';

@Injectable()
export abstract class DbConnectionService {

  abstract getDbConnectionList(): Observable<DbConnection>;

  abstract createDbConnection(createDbConnection: CreateDbConnection): Observable<void>;
}
