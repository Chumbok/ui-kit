import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class PingService {

  private pingEndpoint: string;
  private callThroughGateway: boolean = environment.chumbok.apiCallThroughGateway;

  constructor(private http: HttpClient) {
  }

  public ping(serviceId: string) {

    if (this.callThroughGateway && serviceId != null) {
      this.pingEndpoint = environment.chumbok.apiBaseEndpoint + '/' + serviceId + '/ping';
    } else {
      this.pingEndpoint = environment.chumbok.apiBaseEndpoint + '/ping';
    }

    return this.http.get(this.pingEndpoint);
  }

}
