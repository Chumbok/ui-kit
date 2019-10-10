import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EmptyObservable} from 'rxjs-compat/observable/EmptyObservable';
import {AppointmentService} from './appointment.service';
import {DoctorAuthService} from "./doctor.auth.service";

@Injectable({providedIn: 'root'})
export class AppointmentHttpService implements AppointmentService {

  private callThroughGateway: boolean = environment.chumbok.apiCallThroughLocalServer;

  private httpOptions = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken()})
  };

  private authHeader = new HttpHeaders({'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken()});

  private getAppointmentByDoctorIdEndpoint: string = this.callThroughGateway ?
    environment.chumbok.apiBaseEndpointLocalServer + '/api/doctor/appointments' : environment.chumbok.apiBaseEndpointLocalServer + '/api/doctor/appointments';

  constructor(private doctorAuthService: DoctorAuthService, private http: HttpClient) {
  }

  public getFreeTimeSlots(selectedDate: string): Observable<any> {
    return new EmptyObservable<Response>();
  }

  public getAppointmentDetails(): Observable<any> {
    return new EmptyObservable<Response>();
  }

  public createAppointment(phoneNumber: string,
                           patientName: string,
                           address: string,
                           date: string,
                           timeSlot: string): Observable<any> {
    console.log(phoneNumber);
    console.log(patientName);
    console.log(address);
    console.log(date);
    console.log(timeSlot);
    return new EmptyObservable<Response>();
  }

  public getAppointmentList(): Observable<any> {
    return new EmptyObservable<Response>();
  }

  public deleteAppointment(appointmentId: string) {
    return new EmptyObservable<Response>();
  }

  public getAppointmentListByDoctorId(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken()})
    };

    console.log(this.http.get(this.getAppointmentByDoctorIdEndpoint, httpOptions).map(res => res));
    return this.http.get(this.getAppointmentByDoctorIdEndpoint, httpOptions).map(res => res);
  }
}
