import {Injectable} from '@angular/core';
import {PingService} from './ping.service';
import {of} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PingMockService implements PingService {

  ping(serviceId: string) {
    console.log('HTTP ping is disabled because environment.chumbok.enableMock=true.');
    return of({});
  }

}
