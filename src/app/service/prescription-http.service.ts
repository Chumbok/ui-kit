import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {EmptyObservable} from 'rxjs-compat/observable/EmptyObservable';
import {PrescriptionService} from './prescription.service';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CreateDrug} from '../model/create-medicine';
import {DoctorAuthService} from "./doctor.auth.service";

@Injectable({providedIn: 'root'})
export class PrescriptionHttpService implements PrescriptionService {
  private callThroughLocalServer: boolean = environment.chumbok.apiCallThroughLocalServer;

  private httpOptions = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken()})
  };

  private authHeader = new HttpHeaders({'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken()});
  private

  constructor(private doctorAuthService: DoctorAuthService, private http: HttpClient) {
  }

  public getPrescriptionList(currentPage): Observable<any> {
    return new EmptyObservable<Response>();
  }

  public getPrescriptionView(): Observable<any> {
    return new EmptyObservable<Response>();
  }

  public getPatientProfile(patientId: string): Observable<any> {

    const getPatientProfileEndpoint: string = this.callThroughLocalServer ?
      environment.chumbok.apiBaseEndpointLocalServer + '/api/patient/' + patientId + '/profile' : environment.chumbok.apiBaseEndpointLocalServer + '/api/patient/profile';

    const httpOptions = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken()})
    };

    return this.http.get(getPatientProfileEndpoint, httpOptions).map(res => res);


  }

  public createPrescription(appointmentId: string,
                            complain: string,
                            parameters: string,
                            remarks: string,
                            dentalHistory: string,
                            vaccinationHistory: string,
                            investigation: string,
                            rediological: string,
                            planning: string,
                            date: string,
                            medicineList: CreateDrug[]): Observable<any> {

    return new EmptyObservable<Response>();

  }
}
