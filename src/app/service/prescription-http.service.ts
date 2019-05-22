import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {EmptyObservable} from 'rxjs-compat/observable/EmptyObservable';
import {PrescriptionService} from './prescription.service';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {CreateDrug} from '../model/create-medicine';

@Injectable({providedIn: 'root'})
export class PrescriptionHttpService implements PrescriptionService {
  private callThroughGateway: boolean = environment.chumbok.apiCallThroughGateway;

  private httpOptions = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.authService.getAuthToken()})
  };

  private authHeader = new HttpHeaders({'Authorization': 'Bearer ' + this.authService.getAuthToken()});

  constructor(private authService: AuthService, private http: HttpClient) {
  }

  public getPrescriptionList (currentPage): Observable<any> {
    return new EmptyObservable<Response>();
  }

  public getPrescriptionView(): Observable<any> {
    return new EmptyObservable<Response>();
  }

  public getPatientProfile(patientId: string): Observable<any> {
    return new EmptyObservable<Response>();
  }

  public createPrescription(id: string,
                            complain: string,
                            parameters: string,
                            remarks: string,
                            dentalHistory: string,
                            vaccinationHistory: string,
                            investigation: string,
                            rediological: string,
                            planning: string,
                            phoneNumber: string,
                            patientName: string,
                            address: string,
                            date: string,
                            medicineList: CreateDrug[]): Observable<any> {
    return new EmptyObservable<Response>();

  }
}
