import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CreateDrug} from '../model/create-medicine';
import {Diagnosis} from "../model/on-diagonsis";
import {OnExamination} from "../model/on-examination";
import {ChiefComplain} from "../model/chief-complain";


@Injectable()
export abstract class PrescriptionService {
  abstract getPrescriptionList(currentPage): Observable<any>;
  abstract getPrescriptionView(): Observable<any>;
  abstract getPatientProfile(patientId: string): Observable<any>;

  abstract createPrescription(appointmentId: string,
                              complain: Array<ChiefComplain>,
                              parameters: Array<OnExamination>,
                              dentalHistory: Array<Diagnosis>,
                              nextVisitDate: string,
                              medicineList: CreateDrug[]
  ): Observable<any>;

}


