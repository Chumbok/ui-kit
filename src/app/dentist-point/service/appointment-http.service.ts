import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {EmptyObservable} from 'rxjs-compat/observable/EmptyObservable';
import {AppointmentService} from './appointment.service';
import {DoctorAuthService} from './doctor.auth.service';

@Injectable({providedIn: 'root'})
export class AppointmentHttpService implements AppointmentService {

  private getAppointmentByDoctorIdEndpoint: string =
    environment.chumbok.apiBaseEndpointLocalServer + '/api/doctor/appointments';
  private getPatientDetailsForAutoSuggestion: string =
    environment.chumbok.apiBaseEndpointLocalServer + '/api/patient/details';

  private getAppointmentListByDoctorIdMobilet: string =
    environment.chumbok.apiBaseEndpointLocalServer + '/android/api/appointments';

  constructor(private doctorAuthService: DoctorAuthService, private http: HttpClient) {
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
      }
    ];
    return of(freeSlots);
  }

  public getAppointmentDetailsForAutoSuggestion(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken()}),
      withCredentials: true
    };
    return this.http.get(this.getPatientDetailsForAutoSuggestion, httpOptions).map(res => res);

  }

  public createAppointment(phoneNumber: string, patientName: string, address: string, date: string, age: string,
                           bloodGroup: string, doctorId: string, doctorChamber: string,
                           timeSlot: string): Observable<any> {

    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken(),
    });
    const createPrescriptionEndpoint: string =
      environment.chumbok.apiBaseEndpointLocalServer + '/api/appointment';

    return this.http.post(createPrescriptionEndpoint, {
        'phoneNumber': phoneNumber,
        'patientName': patientName,
        'address': address,
        'age': age,
        'bloodGroup': bloodGroup,
        'doctorId': doctorId,
        'doctorChamber': doctorChamber,
        'date': date,
        'timeSlot': timeSlot
      },
      {
        headers: httpHeaders,
        observe: 'response'
      }
    );

  }

  public getAppointmentList(): Observable<any> {

    return new EmptyObservable<Response>();
  }

  public deleteAppointment(appointmentId: string) {

    return new EmptyObservable<Response>();
  }

  public getAppointmentListByDoctorId(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken()}),
      withCredentials: true
    };
    return this.http.get(this.getAppointmentByDoctorIdEndpoint, httpOptions).map(res => res);
  }

  public getAppointmentListByLoggedInPatient(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken()}),
      withCredentials: true
    };
    return this.http.get(this.getAppointmentListByDoctorIdMobilet, httpOptions).map(res => res);
  }

  public getDoctorList(): Observable<any> {

    const getDoctorListEndpoint: string =
      environment.chumbok.apiBaseEndpointLocalServer + '/android/api/doctors';
    const httpOptions = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken()})
    };
    return this.http.get(getDoctorListEndpoint, httpOptions).map(res => res);
  }

  getDoctorChamberList(doctorId: string): Observable<any> {

    const getDoctorChamberListEndpoint: string =
      environment.chumbok.apiBaseEndpointLocalServer + '/android/api/doctor/' + doctorId + '/chamber';


    const httpOptions = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken()})
    };
    return this.http.get(getDoctorChamberListEndpoint, httpOptions).map(res => res);
  }


  createAppointmentByPatient(date: string, doctorID: string, doctorChamber: string, timeSlot: string): Observable<any> {

    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken(),
    });
    const createAppointmentByPatientEndpoint: string =
      environment.chumbok.apiBaseEndpointLocalServer + '/android/api/appointments';

    return this.http.post(createAppointmentByPatientEndpoint, {

        'doctorId': doctorID,
        'doctorChamber': doctorChamber,
        'date': date,
        'time': timeSlot
      },
      {
        headers: httpHeaders,
        observe: 'response'
      }
    );
  }
}
