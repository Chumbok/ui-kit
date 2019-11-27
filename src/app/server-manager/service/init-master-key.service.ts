import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export abstract class InitMasterKeyService {

  abstract initKey(key: string): Observable<any>;
}
