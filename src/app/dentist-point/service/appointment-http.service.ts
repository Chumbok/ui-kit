import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EmptyObservable} from 'rxjs-compat/observable/EmptyObservable';
import {AppointmentService} from './appointment.service';
import {DoctorAuthService} from './doctor.auth.service';
import {DatePipe} from "@angular/common";

@Injectable({providedIn: 'root'})
export class AppointmentHttpService implements AppointmentService {

  private getAppointmentByDoctorIdEndpoint: string =
    environment.chumbok.dentistPointApiBaseEndPoint + '/api/doctor/appointments';

  private getPatientDetailsForAutoSuggestion: string =
    environment.chumbok.dentistPointApiBaseEndPoint + '/api/patient/details';



  private getAppointmentListByDoctorIdMobilet: string =
    environment.chumbok.dentistPointApiBaseEndPoint + '/android/api/appointments';

  constructor(private doctorAuthService: DoctorAuthService, private http: HttpClient, private datePipe: DatePipe) {
  }

  public getFreeTimeSlots(doctorId: String, selectedDate: string): Observable<any> {

    let newDate = new Date(selectedDate);
    let latest_date = this.datePipe.transform(newDate, 'yyyy-MM-dd');
    const httpOptions = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken()}),
      withCredentials: true
    };
    const getFreeSlots: string =
      environment.chumbok.dentistPointApiBaseEndPoint + '/api/doctor/' + doctorId + '/freeSlots/' + latest_date;
    return this.http.get(getFreeSlots, httpOptions).map(res => res);

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
      environment.chumbok.dentistPointApiBaseEndPoint + '/api/appointment';
    console.log(doctorId);
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
      environment.chumbok.dentistPointApiBaseEndPoint + '/android/api/doctors';
    const httpOptions = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken()})
    };
    return this.http.get(getDoctorListEndpoint, httpOptions).map(res => res);
  }

  getDoctorChamberList(doctorId: string): Observable<any> {

    const getDoctorChamberListEndpoint: string =
      environment.chumbok.dentistPointApiBaseEndPoint + '/android/api/doctor/' + doctorId + '/chamber';


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
      environment.chumbok.dentistPointApiBaseEndPoint + '/android/api/appointments';

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
