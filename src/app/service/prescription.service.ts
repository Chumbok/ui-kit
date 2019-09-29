import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CreateDrug} from '../model/create-medicine';


@Injectable()
export abstract class PrescriptionService {
  abstract getPrescriptionList(currentPage): Observable<any>;
  abstract getPrescriptionView(): Observable<any>;
  abstract getPatientProfile(patientId: string): Observable<any>;

  abstract createPrescription(appointmentId: string,
                              complain: string,
                              parameters: string,
                              remarks: string,
                              dentalHistory: string,
                              vaccinationHistory: string,
                              investigation: string,
                              rediological: string,
                              planning: string,
                              nextVisitDate: string,
                              medicineList: CreateDrug[]
  ): Observable<any>;

}


