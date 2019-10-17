import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {EmptyObservable} from 'rxjs-compat/observable/EmptyObservable';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Pharmacies} from '../model/create-medicine';
import {TemplateService} from './template.service';
import {DoctorAuthService} from './doctor.auth.service';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class TemplateHttpService implements TemplateService {
  private callThroughLocalServer: boolean = environment.chumbok.apiCallThroughLocalServer;

  private httpOptions = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken()})
  };

  private authHeader = new HttpHeaders({'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken()});

  constructor(private doctorAuthService: DoctorAuthService, private http: HttpClient) {
  }

  public createTemplate(tempName: string, complain: Array<string>, parameters: Array<string>, remarks: Array<string>,
                        dentalHistory: Array<string>, vaccinationHistory: Array<string>, investigation: Array<string>,
                        radiological: Array<string>, planning: Array<string>, prescriptionList: Array<Pharmacies>): Observable<any> {
    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken(),
    });
    const createPrescriptionWithoutIdEndpoint: string = this.callThroughLocalServer ?

      environment.chumbok.apiBaseEndpointLocalServer + '/api/create-template'
      : environment.chumbok.apiBaseEndpointLocalServer + '/api/create-template';

    return this.http.post(createPrescriptionWithoutIdEndpoint, {
        tempName, parameters, remarks, dentalHistory, vaccinationHistory, investigation,
        radiological, planning, prescriptionList
      },
      {
        headers: httpHeaders,
        observe: 'response'
      }
    );

  }

  public editTemplate(tempId: string, tempName: string, complain: string, parameters: string,
                      remarks: string, dentalHistory: string, vaccinationHistory: string, investigation: string,
                      radiological: string, planning: string, prescriptionList: Array<Pharmacies>): Observable<any> {
    return new EmptyObservable<Response>();

  }

  public getTemplateView(): Observable<any> {
    const getTemplateEndpoint: string = this.callThroughLocalServer ?
      environment.chumbok.apiBaseEndpointLocalServer + '/api/show-templates'
      : environment.chumbok.apiBaseEndpointLocalServer + '/api/patient/profile';

    const httpOptions = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken()})
    };

    return this.http.get(getTemplateEndpoint, httpOptions).pipe(map(res => res));
  }

  public getTemplateViewById(selectedTemplateId: string): Observable<any> {
    const getTemplateByIdEndpoint: string = this.callThroughLocalServer ?
      environment.chumbok.apiBaseEndpointLocalServer + '/api/template/' + selectedTemplateId + '/show-template'
      : environment.chumbok.apiBaseEndpointLocalServer + '/api/show-template';

    const httpOptions = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken()})
    };

    return this.http.get(getTemplateByIdEndpoint, httpOptions).pipe(map(res => res));
  }


  public deleteTemplate(templateId: string): Observable<any> {
    return new EmptyObservable<Response>();
  }
}
