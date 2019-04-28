import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {EmptyObservable} from 'rxjs-compat/observable/EmptyObservable';
import {AppointmentService} from './appointment.service';

@Injectable({providedIn: 'root'})
export class AppointmentMockService implements AppointmentService {

  constructor() {
  }

  public getFreeTimeSlots(selectedDate: string): Observable<any> {
    const freeSlots = [
      {
        startTime: '10:00',
        endTime: '10:30',
      },
      {
        startTime: '10:30',
        endTime: '11:00',
      },
      {
        startTime: '11:00',
        endTime: '11:30',
      },
      {
        startTime: '11:30',
        endTime: '12:00',
      },
    ];
    return of(freeSlots);
  }

  public getAppointmentDetails(): Observable<any> {
    const appointmentDetails = [
      {
        phoneno: '01988841890',
        nameP: 'Monirozzaman Roni',
        addressP: 'asulia,savar,dhaka'
      },
      {
        phoneno: '01745675456',
        nameP: 'Asraful Alom Rassel',
        addressP: 'united state,UK'
      }
    ];
    return of(appointmentDetails);
  }

  public createAppointment(phoneNumber: string, patientName: string, address: string, date: string, timeSlot: string): Observable<any> {
    console.log(phoneNumber);
    console.log(patientName);
    console.log(address);
    console.log(date);
    console.log(timeSlot);
    return new EmptyObservable<Response>();
  }

  public getAppointmentList(): Observable<any> {
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
      '          "startDateTime": "2019-02-22 18:00:00", \n' +
      '          "endDateTime": "2019-02-22 18:30:00",\n' +
      '          "location": "Skype",\n' +
      '          "roomId": "FTGee89b-e89b-12d3-a456-556642440000",\n' +
      '          "attendees": [\n' +
      '              { \n' +
      '                  "id": "64244067-e89b-12d3-a456-556642444444",  \n' +
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
      '                  "id": "64244067-e89b-12d3-a456-556642441111",  \n' +
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
      '                  "id": "64244067-e89b-12d3-a456-556642443333",  \n' +
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
      '                  "id": "64244067-e89b-12d3-a456-556642442133",  \n' +
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
