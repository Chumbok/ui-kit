import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {EmptyObservable} from 'rxjs-compat/observable/EmptyObservable';
import {CreateDrug} from '../model/create-medicine';
import {TemplateService} from './template.service';

@Injectable({providedIn: 'root'})
export class TemplateMockService implements TemplateService {

  constructor() {
  }

  public createTemplate(tempName: string, complain: string, parameters: string, remarks: string, dentalHistory: string,
                        vaccinationHistory: string, investigation: string, radiological: string, planning: string,
                        prescriptionList: Array<CreateDrug>): Observable<any> {
    console.log('template', tempName);
    console.log(complain);
    console.log(parameters);
    console.log(remarks);
    console.log(dentalHistory);
    console.log(vaccinationHistory);
    console.log(investigation);
    console.log(radiological);
    console.log(prescriptionList);

    return new EmptyObservable<Response>();

  }

  public editTemplate(tempId: string, tempName: string, complain: string, parameters: string,
                      remarks: string, dentalHistory: string, vaccinationHistory: string, investigation: string,
                      radiological: string, planning: string, prescriptionList: Array<CreateDrug>): Observable<any> {
    console.log(tempId);
    console.log('template name:', tempName);
    console.log(complain);
    console.log(parameters);
    console.log(remarks);
    console.log(dentalHistory);
    console.log(vaccinationHistory);
    console.log(investigation);
    console.log(radiological);
    console.log(prescriptionList);

    return new EmptyObservable<Response>();

  }
}
