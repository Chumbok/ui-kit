import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {EmptyObservable} from 'rxjs-compat/observable/EmptyObservable';
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
}
