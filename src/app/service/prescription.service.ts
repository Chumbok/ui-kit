import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Pharmacies} from '../model/create-medicine';
import {Diagnosises} from "../model/on-diagonsis";
import {OnExaminations} from "../model/on-examination";
import {ChiefComplains} from "../model/chief-complain";


@Injectable()
export abstract class PrescriptionService {
  abstract getPrescriptionList(currentPage): Observable<any>;

  abstract getPrescriptionListByPatientId(currentPage): Observable<any>;

  abstract getPrescriptionListByLoginPatientId(currentPage): Observable<any>;

  abstract getPrescriptionView(selectedTemplateId): Observable<any>;

  abstract getPatientPrescriptionView(selectedTemplateId): Observable<any>;

  abstract getPatientProfile(patientId: string): Observable<any>;

  abstract patientApprove(patientId: string): Observable<any>;

  abstract isPatientApprove(patientId: string): Observable<any>;

  abstract createPrescription(appointmentId: string,
                              complain: Array<ChiefComplains>,
                              parameters: Array<OnExaminations>,
                              dentalHistory: Array<Diagnosises>,
                              nextVisitDate: string,
                              medicineList: Pharmacies[]
  ): Observable<any>;

  abstract createPrescriptionWithoutPatientId(patientName: string,
                                              phoneNumber:string,
                                              address:string,
                                              nextVisitDate: string,
                              complain: Array<ChiefComplains>,
                              parameters: Array<OnExaminations>,
                              dentalHistory: Array<Diagnosises>,
                              medicineList: Pharmacies[]
  ): Observable<any>;

}


