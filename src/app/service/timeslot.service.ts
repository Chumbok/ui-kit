import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Observable, of} from 'rxjs';

@Injectable()
export class TimeslotService {

  private enableMock: boolean = environment.chumbok.enableMock;
  private callThroughGateway: boolean = environment.chumbok.apiCallThroughGateway;

  private orgListEndpoint: string = this.callThroughGateway ?
    environment.chumbok.apiBaseEndpoint + '/uaa/orgs' : environment.chumbok.apiBaseEndpoint + '/orgs';

  private serviceBaseEndpoint: string = this.callThroughGateway ?
    environment.chumbok.apiBaseEndpoint + '/uaa' : environment.chumbok.apiBaseEndpoint;

  private httpOptions = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.authService.getAuthToken()})
  };

  private authHeader = new HttpHeaders({'Authorization': 'Bearer ' + this.authService.getAuthToken()});

  constructor(private authService: AuthService, private http: HttpClient) {
  }

  public getTimeSlot(): Observable<any> {
    return this.enableMock ? this.getTimeSlotMock() : null;
  }

  private getTimeSlotMock(): Observable<any> {
    const mockResp = '{"page":0,' +
      '"size":10,' +
      '"totalPages":1,' +
      '"totalElements":1,' +
      '"items":[' +
      '{' +

      '"availableTimeSlots":[' +
      '{"startDate":"Tue Apr 23 2019 00:00:00 GMT+0600 (Bangladesh Standard Time)","startTime":"10:00","endDate":"Tue Apr 23 2019 00:00:00 GMT+0600 (Bangladesh Standard Time)","endTime":"11:00"},' +
      '{"startDate":"Tue Apr 24 2019 00:00:00 GMT+0600 (Bangladesh Standard Time)","startTime":"11:00","endDate":"Tue Apr 23 2019 00:00:00 GMT+0600 (Bangladesh Standard Time)","endTime":"12:00"},' +
      '{"startDate":"Tue Apr 24 2019 00:00:00 GMT+0600 (Bangladesh Standard Time)","startTime":"13:00","endDate":"Tue Apr 23 2019 00:00:00 GMT+0600 (Bangladesh Standard Time)","endTime":"14:00"},' +
      '{"startDate":"Tue Apr 23 2019 00:00:00 GMT+0600 (Bangladesh Standard Time)","startTime":"14:00","endDate":"Tue Apr 23 2019 00:00:00 GMT+0600 (Bangladesh Standard Time)","endTime":"15:00"}' +
      ']' +
      '}' +
      ']}';
    return of(JSON.parse(mockResp));

  }


}
