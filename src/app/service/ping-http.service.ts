import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {PingService} from './ping.service';

@Injectable()
export class PingHttpService implements PingService {

  private pingEndpoint: string = environment.chumbok.pingEndpoint;

  constructor(private http: HttpClient) {
  }

  ping() {
    return this.http.get(this.pingEndpoint);
  }
}
