import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Pharmacies} from '../model/create-medicine';
import {ChiefComplains} from "../model/chief-complain";
import {OnExaminations} from "../model/on-examination";
import {Diagnosises} from "../model/on-diagonsis";

@Injectable()
export abstract class TemplateService {

  abstract createTemplate(templateName: string,
                          complain: Array<ChiefComplains>,
                          parameters: Array<OnExaminations>,
                          dentalHistory: Array<Diagnosises>,
                          medicineList: Pharmacies[]
  ): Observable<any>;


  abstract editTemplate(tempId: string, tempName: string, complain: string, parameters: string,
                        remarks: string, dentalHistory: string, vaccinationHistory: string, investigation: string,
                        radiological: string, planning: string, prescriptionList: Array<Pharmacies>): Observable<any>;

  abstract getTemplateView(): Observable<any>;

  abstract getTemplateViewById(selectedTemplateId: string): Observable<any>;

  abstract deleteTemplate(templateId: string): Observable<any>;
}
