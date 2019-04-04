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
      '{"startDateTime":"2016-07-08 18:00:00","endDateTime":"2019-07-08 18:00:00"},' +
      '{"startDateTime":"2018-07-08 18:00:00","endDateTime":"20109-07-08 18:00:00"},' +
      '{"startDateTime":"2016-07-08 18:00:00","endDateTime":"2019-07-08 18:00:00"},' +
      '{"startDateTime":"2018-07-08 18:00:00","endDateTime":"20109-07-08 18:00:00"}' +
      ']' +
      '}' +
      ']}';
    return of(JSON.parse(mockResp));

  }


}
