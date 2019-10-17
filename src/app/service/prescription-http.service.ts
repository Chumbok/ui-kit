import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PrescriptionService} from './prescription.service';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Pharmacies} from '../model/create-medicine';
import {DoctorAuthService} from "./doctor.auth.service";
import {ChiefComplains} from "../model/chief-complain";
import {OnExaminations} from "../model/on-examination";
import {Diagnosises} from "../model/on-diagonsis";

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
    const getPrescriptionEndpoint: string = this.callThroughLocalServer ?
      environment.chumbok.apiBaseEndpointLocalServer + '/api/doctor/prescriptions' : environment.chumbok.apiBaseEndpointLocalServer + '/api/doctor/prescriptions';

    const httpOptions = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken()})
    };

    return this.http.get(getPrescriptionEndpoint, httpOptions).map(res => res);

  }


  public getPrescriptionListByPatientId(currentPage: String): Observable<any> {
    const getPrescriptionListByPatientIdEndpoint: string = this.callThroughLocalServer ?
      environment.chumbok.apiBaseEndpointLocalServer + '/api/doctor/prescription/' + currentPage + '' : environment.chumbok.apiBaseEndpointLocalServer + '/api/doctor/prescriptions';

    const httpOptions = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken()})
    };

    return this.http.get(getPrescriptionListByPatientIdEndpoint, httpOptions).map(res => res);

  }


  public getPrescriptionView(selectedTemplateId): Observable<any> {
    const getPrescriptionEndpoint: string = this.callThroughLocalServer ?
      environment.chumbok.apiBaseEndpointLocalServer + '/api/prescription/' + selectedTemplateId + '/prescription-view' : environment.chumbok.apiBaseEndpointLocalServer + '/api/prescription/{prescriptionId}/prescription-view';

    const httpOptions = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken()})
    };

    return this.http.get(getPrescriptionEndpoint, httpOptions).map(res => res);
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
                            chiefComplains: Array<ChiefComplains>,
                            onExaminations: Array<OnExaminations>,
                            diagnosises: Array<Diagnosises>,
                            date: string,
                            pharmacies: Pharmacies[]) {

    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken(),
    });
    const createPrescriptionEndpoint: string = this.callThroughLocalServer ?

      environment.chumbok.apiBaseEndpointLocalServer + '/api/appointment/' + appointmentId + '/create-prescription' : environment.chumbok.apiBaseEndpointLocalServer + '/api/create-prescription';

    return this.http.post(createPrescriptionEndpoint, {
        nextVisitDate: date, chiefComplains, onExaminations, diagnosises, pharmacies
      },
      {
        headers: httpHeaders,
        observe: 'response'
      }
    );
  }

  patientApprove(patientId: string): Observable<any> {
    const getPatientProfileEndpoint: string = this.callThroughLocalServer ?
      environment.chumbok.apiBaseEndpointLocalServer + '/api/doctor/approve/patient/' + patientId : environment.chumbok.apiBaseEndpointLocalServer + '/api/doctor/approve/patient/' + patientId;

    const httpOptions = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken()})
    };
    return this.http.put(getPatientProfileEndpoint, httpOptions).map(res => res);
  }

  createPrescriptionWithoutPatientId(name: string,
                                     mobile: string,
                                     address: string,
                                     nextVisitDate: string,
                                     chiefComplains: Array<ChiefComplains>,
                                     onExaminations: Array<OnExaminations>,
                                     diagnosises: Array<Diagnosises>,
                                     pharmacies: Pharmacies[]): Observable<any> {

    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken(),
    });
    const createPrescriptionWithoutIdEndpoint: string = this.callThroughLocalServer ?

      environment.chumbok.apiBaseEndpointLocalServer + '/api/doctor/create-prescription' : environment.chumbok.apiBaseEndpointLocalServer + '/api/doctor/create-prescription';

    return this.http.post(createPrescriptionWithoutIdEndpoint, {
        name: name, mobile, address, nextVisitDate, chiefComplains, onExaminations, diagnosises, pharmacies,
      },
      {
        headers: httpHeaders,
        observe: 'response'
      }
    );
  }

  isPatientApprove(patientId: string): Observable<any> {
    const getPatientProfileEndpoint: string = this.callThroughLocalServer ?
      environment.chumbok.apiBaseEndpointLocalServer + '/api/doctor/approve/patient/' + patientId : environment.chumbok.apiBaseEndpointLocalServer + '/api/doctor/approve/patient/' + patientId;

    const httpOptions = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken()})
    };
    return this.http.get(getPatientProfileEndpoint, httpOptions).map(res => res);
  }
}
