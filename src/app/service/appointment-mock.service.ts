import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {EmptyObservable} from 'rxjs-compat/observable/EmptyObservable';
import {AppointmentService} from './appointment.service';
import {FlashMessageService} from './flash-message.service';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AppointmentMockService implements AppointmentService {

  constructor(private flashMessageService: FlashMessageService, private router: Router) {
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

  public createAppointment(phoneNumber: string, patientName: string, address: string, date: string,
                           age: string,
                           bloodGroup: string,
                           doctorName: string,
                           doctorChamber: string,
                           timeSlot: string): Observable<any> {
    console.log(phoneNumber);
    console.log(patientName);
    console.log(address);
    console.log(date);
    console.log(age);
    console.log(bloodGroup);
    console.log(doctorName);
    console.log(doctorChamber);
    console.log(timeSlot);
    this.router.navigate(['patient/create-appointment']);
    this.flashMessageService.showFlashMessage({
        messages: ['Appointment Create Successfully '],
        dismissible: true,
        type: 'primary'
      }
    );
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
      '          "subject": "Di",\n' +
      '          "description": "Provide food chart.", \n' +
      '          "startDateTime": "2019-05-22 18:00:00", \n' +
      '          "endDateTime": "2019-05-22 18:30:00",\n' +
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
      '                  "name": "Joy",\n' +
      '                  "email": "joy@chumbok.com",\n' +
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
      '          "description": "chart.", \n' +
      '          "startDateTime": "2019-05-10 20:00:00", \n' +
      '          "endDateTime": "2019-05-10 20:30:00",\n' +
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
 public deleteAppointment(appointmentId: string): Observable<any> {
   console.log(appointmentId);
   return new EmptyObservable<Response>();
}

  getAppointmentListByDoctorId(): Observable<any> {
    const mockResp = '[\n' +
      '    {\n' +
      '        "appointmentId": "2853dbac-0713-43f6-8bce-251752fb2e2b",\n' +
      '        "patientId": "2bbd3c15f287b22cc6f0a0c6ec38b2a1-90e",\n' +
      '        "patientName": "admin",\n' +
      '        "startDateTime": "2019-12-12 13:00",\n' +
      '        "endDateTime": "2019-12-12 13:30"\n' +
      '    },\n' +
      '    {\n' +
      '        "appointmentId": "3ab51cc7-a0df-45c3-971e-e238ac8b2e20",\n' +
      '        "patientId": "e666bc69-edd9-4da4-a22e-8b9023fd284a",\n' +
      '        "patientName": "Monirozzaman Roni",\n' +
      '        "startDateTime": "2019-12-12 13:00",\n' +
      '        "endDateTime": "2019-12-12 13:30"\n' +
      '    }]';

    console.log(JSON.parse(mockResp))
    return of(JSON.parse(mockResp));
  }

  getDoctorList(): Observable<any> {

    const doctorMock = '[\n' +
      '    {\n' +
      '        "name": "dr.admin",\n' +
      '        "id": "2bbd3c15f287b22cc6f0a0c6ec38b2a1"\n' +
      '    },\n' +
      '    {\n' +
      '        "name": "Dr X",\n' +
      '        "id": "3ed47387-b4c9-4a0e-8d98-9fe788b5eec5"\n' +
      '    },\n' +
      '    {\n' +
      '        "name": "gvjhfgv",\n' +
      '        "id": "4a6e2ed4-82f6-476b-ad9d-133641120be1"\n' +
      '    }\n' +
      ']'
    return of(JSON.parse(doctorMock));
  }

  getDoctorChamberList(selectedDate: string): Observable<any> {
    const chamberList = '[\n' +
      '    {\n' +
      '        "chamberName": "Gazipur"\n' +
      '    }\n' +
      ']'
    return of(JSON.parse(chamberList));
  }
}
