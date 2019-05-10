import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CreateDrug} from '../model/create-medicine';

@Injectable()
export abstract class TemplateService {
  abstract createTemplate(tempName: string, complain: string, parameters: string, remarks: string, dentalHistory: string,
                          vaccinationHistory: string, investigation: string, radiological: string, planning: string,
                          prescriptionList: Array<CreateDrug>): Observable<any>;

  abstract editTemplate(tempId: string, tempName: string, complain: string, parameters: string,
                        remarks: string, dentalHistory: string, vaccinationHistory: string, investigation: string,
                        radiological: string, planning: string, prescriptionList: Array<CreateDrug>): Observable<any>;
}
