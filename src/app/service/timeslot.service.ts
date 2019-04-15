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

  public getFreeTimeSlots(selectedDate: string): Observable<any> {
    return this.enableMock ? this.getFreeTimeSlotsMock(selectedDate) : null;
  }

  private getFreeTimeSlotsMock(selectedDate: string): Observable<any> {

    const freeSlots = [
      {
        startTime: '10:00',
        endTime: '10:30',
      },
      {
        startTime: '10:30',
        endTime: '11:00',
      },
    ];
    return of(freeSlots);
  }


}
