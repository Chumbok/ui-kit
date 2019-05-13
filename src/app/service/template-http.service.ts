import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {EmptyObservable} from 'rxjs-compat/observable/EmptyObservable';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {CreateDrug} from '../model/create-medicine';
import {TemplateService} from './template.service';

@Injectable({providedIn: 'root'})
export class TemplateHttpService implements TemplateService {
  private callThroughGateway: boolean = environment.chumbok.apiCallThroughGateway;

  private httpOptions = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.authService.getAuthToken()})
  };

  private authHeader = new HttpHeaders({'Authorization': 'Bearer ' + this.authService.getAuthToken()});

  constructor(private authService: AuthService, private http: HttpClient) {
  }

  public createTemplate(tempName: string, complain: string, parameters: string, remarks: string, dentalHistory: string,
                        vaccinationHistory: string, investigation: string, radiological: string, planning: string,
                        prescriptionList: Array<CreateDrug>): Observable<any> {
    return new EmptyObservable<Response>();

  }

  public editTemplate(tempId: string, tempName: string, complain: string, parameters: string,
                      remarks: string, dentalHistory: string, vaccinationHistory: string, investigation: string,
                      radiological: string, planning: string, prescriptionList: Array<CreateDrug>): Observable<any> {
    return new EmptyObservable<Response>();

  }

  public getTemplateView(): Observable<any> {
    return new EmptyObservable<Response>();
  }

  public deleteTemplate(templateId: string): Observable<any> {
    return new EmptyObservable<Response>();
  }
}
