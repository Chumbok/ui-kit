import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PingService} from './ping.service';
import {environment} from '../../../environments/environment';

@Injectable()
export class PingHttpService implements PingService {

  private pingEndpoint: string = environment.chumbok.pingEndpoint;

  constructor(private http: HttpClient) {
  }

  ping() {
    return this.http.get(this.pingEndpoint);
  }
}
