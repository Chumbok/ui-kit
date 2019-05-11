import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CreateDrug} from '../model/create-medicine';


@Injectable()
export abstract class PrescriptionService {
  abstract getPrescriptionList(patientId, currentPage): Observable<any>;

  abstract getPrescriptionView(): Observable<any>;

  abstract deleteTemplate(templateId: string): Observable<any>;

  abstract getPatientProfile(patientId: string): Observable<any>;

  abstract createPrescription(id: string,
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
                              medicineList: CreateDrug[]
  ): Observable<any>;

}


