import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {PingService} from './ping.service';

@Injectable()
export class PingHttpService implements PingService {

  private pingEndpoint: string;
  private callThroughGateway: boolean = environment.chumbok.apiCallThroughGateway;

  constructor(private http: HttpClient) {
  }

  ping(serviceId: string) {

    if (this.callThroughGateway && serviceId != null) {
      this.pingEndpoint = environment.chumbok.apiBaseEndpoint + '/' + serviceId + '/ping';
    } else {
      this.pingEndpoint = environment.chumbok.apiBaseEndpoint + '/ping';
    }

    return this.http.get(this.pingEndpoint);
  }

}
