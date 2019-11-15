import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {EmptyObservable} from 'rxjs-compat/observable/EmptyObservable';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Pharmacies} from '../model/create-medicine';
import {TemplateService} from './template.service';
import {DoctorAuthService} from './doctor.auth.service';
import {ChiefComplains} from '../model/chief-complain';
import {OnExaminations} from '../model/on-examination';
import {Diagnosises} from '../model/on-diagonsis';

@Injectable({providedIn: 'root'})
export class TemplateHttpService implements TemplateService {



  constructor(private doctorAuthService: DoctorAuthService, private http: HttpClient) {
  }

  public createTemplate(templateName: string,
                        chiefComplains: Array<ChiefComplains>,
                        onExaminations: Array<OnExaminations>,
                        diagnosises: Array<Diagnosises>,
                        pharmacies: Pharmacies[]): Observable<any> {

    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken(),
    });
    const createPrescriptionWithoutIdEndpoint: string =
      environment.chumbok.apiBaseEndpointLocalServer + '/api/create-template';

    return this.http.post(createPrescriptionWithoutIdEndpoint, {
        templateName: templateName, chiefComplains, onExaminations, diagnosises, pharmacies
      },
      {
        headers: httpHeaders,
        observe: 'response'
      }
    );

  }

  public editTemplate(tempId: string,
                      templateName: string,
                      chiefComplains: Array<ChiefComplains>,
                      onExaminations: Array<OnExaminations>,
                      diagnosises: Array<Diagnosises>,
                      pharmacies: Pharmacies[]): Observable<any> {
    console.log(tempId);
    console.log(templateName);

    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken(),
    });
    const createPrescriptionEndpoint: string =

      environment.chumbok.apiBaseEndpointLocalServer + '/api/template/' + tempId + '/edit-template';
    return this.http.put(createPrescriptionEndpoint, {
        tem: templateName, chiefComplains, onExaminations, diagnosises, pharmacies
      },
      {
        headers: httpHeaders,
        observe: 'response'
      }
    );



  }

  public getTemplateView(): Observable<any> {

    const getTemplateEndpoint: string =
      environment.chumbok.apiBaseEndpointLocalServer + '/api/show-templates';

    const httpOptions = {

      headers: new HttpHeaders({'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken()})
    };

    return this.http.get(getTemplateEndpoint, httpOptions).map(res => res);
  }

  public getTemplateViewById(selectedTemplateId: string): Observable<any> {

    const getTemplateByIdEndpoint: string =
      environment.chumbok.apiBaseEndpointLocalServer + '/api/template/' + selectedTemplateId + '/show-template';
    const httpOptions = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken()})
    };
    return this.http.get(getTemplateByIdEndpoint, httpOptions).map(res => res);
  }

  public deleteTemplate(templateId: string): Observable<any> {

    return new EmptyObservable<Response>();
  }
}
