import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {EmptyObservable} from 'rxjs-compat/observable/EmptyObservable';
import {AppointmentService} from './appointment.service';

@Injectable({providedIn: 'root'})
export class AppointmentHttpService implements AppointmentService {

  private callThroughGateway: boolean = environment.chumbok.apiCallThroughGateway;

  private httpOptions = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.authService.getAuthToken()})
  };

  private authHeader = new HttpHeaders({'Authorization': 'Bearer ' + this.authService.getAuthToken()});

  constructor(private authService: AuthService, private http: HttpClient) {
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

  getAppointmentListByDoctorId(): Observable<any> {
    return new EmptyObservable<Response>();
  }
}
