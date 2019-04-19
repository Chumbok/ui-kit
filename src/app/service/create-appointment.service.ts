import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {EmptyObservable} from "rxjs-compat/observable/EmptyObservable";
import {of} from "rxjs/index";
import {SearchByPhoneAppointment} from "../model/search-by-phone-appointment";

@Injectable()
export class CreateAppointmentService {

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

  public getAppointmentDetails(): SearchByPhoneAppointment[] {
    return this.enableMock ? this.getAppointmentDetailsMock() : null;
  }

  public createAppointment(phoneNumber: string, patientName: string, address: string, date: string, timeSlot: string): Observable<any> {
    console.log(phoneNumber);
    console.log(patientName);
    console.log(address);
    console.log(date);
    console.log(timeSlot);
    return new EmptyObservable<Response>();


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

  private getAppointmentDetailsMock(): SearchByPhoneAppointment[] {
    const appointmentDetails = [
      {
        phoneno: '1',
        nameP: 'monir1',
        addressP: 'gazipur'
      },
      {
        phoneno: '2',
        nameP: 'roni2',
        addressP: 'gazipur'
      },
      {
        phoneno: '3',
        nameP: 'moniroz3',
        addressP: 'gazipur'
      },
      {
        phoneno: '4',
        nameP: 'roni4',
        addressP: 'gazipur'
      },
      {
        phoneno: '5',
        nameP: 'moniroz5',
        addressP: 'gazipur'
      },
      {
        phoneno: '6',
        nameP: 'roni6',
        addressP: 'gazipur'
      }
    ];
    return appointmentDetails;
  }
}
