import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Observable, of} from 'rxjs';

@Injectable()
export class AppointmentService {

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

  public getAppointmentList(): Observable<any> {
    return this.enableMock ? this.getAppointmentListMock() : null;
  }

  private getAppointmentListMock(): Observable<any> {
    const mockResp = '{\n' +
      '    "page": 0,\n' +
      '    "size": 10,\n' +
      '    "totalPages": 1,\n' +
      '    "totalElements": 1,\n' +
      '    "items": [\n' +
      '      {\n' +
      '          "id": "64244067-e89b-12d3-a456-556642440000",\n' +
      '          "subject": "Discuss diabetes diet",\n' +
      '          "description": "Provide food chart.", \n' +
      '          "startDateTime": "2019-02-27 18:00:00", \n' +
      '          "endDateTime": "2019-02-27 18:30:00",\n' +
      '          "location": "Skype",\n' +
      '          "roomId": "FTGee89b-e89b-12d3-a456-556642440000",\n' +
      '          "attendees": [\n' +
      '              { \n' +
      '                  "required": true,  \n' +
      '                  "name": "Mahmood",\n' +
      '                  "email": "mahmood@chumbok.com",\n' +
      '                  "organizer": true,\n' +
      '                  "response": "JOINING",\n' +
      '                  "inviteSent": {\n' +
      '                      "email": false,\n' +
      '                      "sms": false\n' +
      '                  }\n' +
      '              },\n' +
      '              {\n' +
      '                  "required": false,  \n' +
      '                  "name": "Roni",\n' +
      '                  "email": "roni@chumbok.com",\n' +
      '                  "organizer": false,\n' +
      '                  "response": null,\n' +
      '                  "inviteSent": {\n' +
      '                      "email": true,\n' +
      '                      "sms": false\n' +
      '                  }\n' +
      '              }\n' +
      '          ]\n' +
      '\n' +
      '      },\n' +
      '        {\n' +
      '          "id": "a4564067-e89b-12d3-a456-556642440000",\n' +
      '          "subject": "Discuss diabetes diet",\n' +
      '          "description": "Provide food chart.", \n' +
      '          "startDateTime": "2019-02-10 20:00:00", \n' +
      '          "endDateTime": "2019-02-10 20:30:00",\n' +
      '          "location": "Skype",\n' +
      '          "roomId": "FTGee89b-e89b-12d3-a456-556642440000",\n' +
      '          "attendees": [\n' +
      '              { \n' +
      '                  "required": true,  \n' +
      '                  "name": "Ashraful",\n' +
      '                  "email": "mahmood@chumbok.com",\n' +
      '                  "organizer": true,\n' +
      '                  "response": "JOINING",\n' +
      '                  "inviteSent": {\n' +
      '                      "email": false,\n' +
      '                      "sms": false\n' +
      '                  }\n' +
      '              },\n' +
      '              {\n' +
      '                  "required": false,  \n' +
      '                  "name": "Roni",\n' +
      '                  "email": "roni@chumbok.com",\n' +
      '                  "organizer": false,\n' +
      '                  "response": null,\n' +
      '                  "inviteSent": {\n' +
      '                      "email": true,\n' +
      '                      "sms": false\n' +
      '                  }\n' +
      '              }\n' +
      '          ]\n' +
      '\n' +
      '      }\n' +
      '\n' +
      '    ]\n' +
      '}';
    return of(JSON.parse(mockResp));
  }


}
