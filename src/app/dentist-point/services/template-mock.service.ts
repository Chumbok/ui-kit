import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {EmptyObservable} from 'rxjs-compat/observable/EmptyObservable';
import {Pharmacies} from "../model/create-medicine";
import {TemplateService} from './template.service';
import {FlashMessageService} from '../../service/flash-message.service';
import {Router} from '@angular/router';
import {ChiefComplains} from "../model/chief-complain";
import {OnExaminations} from "../model/on-examination";
import {Diagnosises} from "../model/on-diagonsis";

@Injectable({providedIn: 'root'})
export class TemplateMockService implements TemplateService {

  constructor(private flashMessageService: FlashMessageService, private router: Router) {
  }

  public createTemplate(templateName: string,
                        chiefComplains: Array<ChiefComplains>,
                        onExaminations: Array<OnExaminations>,
                        diagnosises: Array<Diagnosises>,
                        pharmacies: Pharmacies[]): Observable<any> {

    console.log('template', templateName);
    console.log(chiefComplains);
    console.log(onExaminations);
    console.log(diagnosises);
    console.log(pharmacies);
    this.router.navigate(['doctors/calendar-view']);
    this.flashMessageService.showFlashMessage({
        messages: ['Save Successfully '],
        dismissible: true,
        type: 'primary'
      }
    );
    return new EmptyObservable<Response>();
  }

  public editTemplate(tempId: string, tempName: string, complain: string, parameters: string,
                      remarks: string, dentalHistory: string, vaccinationHistory: string, investigation: string,
                      radiological: string, planning: string, prescriptionList: Array<Pharmacies>): Observable<any> {

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
    this.router.navigate(['doctors/calendar-view']);
    this.flashMessageService.showFlashMessage({
        messages: ['Update Successfully '],
        dismissible: true,
        type: 'primary'
      }
    );
    return new EmptyObservable<Response>();
  }

  public getTemplateView(): Observable<any> {

    const templateList = {
      page: 0,
      size: 10,
      totalPages: 1,
      totalElements: 3,
      items: [
        {
          id: '9388c9ea-f453-41de-96cb-d388dedbf091',
          templateName: 'Dengue fever',
          chiefComplains: [
            'headache', 'headache1', 'headache2', 'headache', 'headache1', 'headache2'
          ],
          parametersAll: [
            'headahgjche', 'headachehgjg1', 'heahgjgdache2'
          ],
          remarksAll: [
            'headachgjghe', 'hehgjgadache1', 'headahjgche2'
          ],
          dentalHistorys: [
            'headache', 'headache1', 'headache2'
          ],
          vaccinationHistorys: [
            'headache', 'headache1', 'headache2'
          ],
          investigations: [
            'headache', 'headache1', 'headache2'
          ],
          radiologicals: [
            'headache', 'headache1', 'headache2'
          ],
          plannings: [
            'headache', 'headache1', 'headache2'
          ],
          medicines: [
            {
              drugType: 'Tab',
              medicineName: 'Napa',
              drugStrength: '10mg',
              drugDose: '1+1+1',
              drugDuration: '1 day'
            },
            {
              drugType: 'cap',
              medicineName: 'Napa',
              drugStrength: '10mg',
              drugDose: '1+1+1',
              drugDuration: '7 day'
            }
          ]
        },
        {
          id: '9388c9ea-f453-41de-96cb-d388dedbf091',
          templateName: 'ffff fever',
          chiefComplains: [
            'headache', 'headache1', 'headache2', 'headache', 'headache1', 'headache2'
          ],
          parametersAll: [
            'headahgjche', 'headachehgjg1', 'heahgjgdache2'
          ],
          remarksAll: [
            'headachgjghe', 'hehgjgadache1', 'headahjgche2'
          ],
          dentalHistorys: [
            'headache', 'headache1', 'headache2'
          ],
          vaccinationHistorys: [
            'headache', 'headache1', 'headache2'
          ],
          investigations: [
            'headache', 'headache1', 'headache2'
          ],
          radiologicals: [
            'headache', 'headache1', 'headache2'
          ],
          plannings: [
            'headache', 'headache1', 'headache2'
          ],
          medicines: [
            {
              drugType: 'Tab',
              medicineName: 'Napa',
              drugStrength: '10mg',
              drugDose: '1+1+1',
              drugDuration: '1 day'
            },
            {
              drugType: 'cap',
              medicineName: 'Napa',
              drugStrength: '10mg',
              drugDose: '1+1+1',
              drugDuration: '7 day'
            }
          ]
        }
      ]
    };


    return of(templateList);
  }


  public getTemplateViewById(selectedTemplateId: string): Observable<any> {

    const templateList = {
      page: 0,
      size: 10,
      totalPages: 1,
      totalElements: 3,
      items: [
        {
          id: '9388c9ea-f453-41de-96cb-d388dedbf091',
          templateName: 'Dengue fever',
          chiefComplains: [
            'headache', 'headache1', 'headache2', 'headache', 'headache1', 'headache2'
          ],
          parametersAll: [
            'headahgjche', 'headachehgjg1', 'heahgjgdache2'
          ],
          remarksAll: [
            'headachgjghe', 'hehgjgadache1', 'headahjgche2'
          ],
          dentalHistorys: [
            'headache', 'headache1', 'headache2'
          ],
          vaccinationHistorys: [
            'headache', 'headache1', 'headache2'
          ],
          investigations: [
            'headache', 'headache1', 'headache2'
          ],
          radiologicals: [
            'headache', 'headache1', 'headache2'
          ],
          plannings: [
            'headache', 'headache1', 'headache2'
          ],
          medicines: [
            {
              drugType: 'Tab',
              medicineName: 'Napa',
              drugStrength: '10mg',
              drugDose: '1+1+1',
              drugDuration: '1 day'
            },
            {
              drugType: 'cap',
              medicineName: 'Napa',
              drugStrength: '10mg',
              drugDose: '1+1+1',
              drugDuration: '7 day'
            }
          ]
        },
        {
          id: '9388c9ea-f453-41de-96cb-d388dedbf091',
          templateName: 'ffff fever',
          chiefComplains: [
            'headache', 'headache1', 'headache2', 'headache', 'headache1', 'headache2'
          ],
          parametersAll: [
            'headahgjche', 'headachehgjg1', 'heahgjgdache2'
          ],
          remarksAll: [
            'headachgjghe', 'hehgjgadache1', 'headahjgche2'
          ],
          dentalHistorys: [
            'headache', 'headache1', 'headache2'
          ],
          vaccinationHistorys: [
            'headache', 'headache1', 'headache2'
          ],
          investigations: [
            'headache', 'headache1', 'headache2'
          ],
          radiologicals: [
            'headache', 'headache1', 'headache2'
          ],
          plannings: [
            'headache', 'headache1', 'headache2'
          ],
          medicines: [
            {
              drugType: 'Tab',
              medicineName: 'Napa',
              drugStrength: '10mg',
              drugDose: '1+1+1',
              drugDuration: '1 day'
            },
            {
              drugType: 'cap',
              medicineName: 'Napa',
              drugStrength: '10mg',
              drugDose: '1+1+1',
              drugDuration: '7 day'
            }
          ]
        }
      ]
    };


    return of(templateList);
  }

  public deleteTemplate(templateId: string): Observable<any> {

    console.log(templateId);
    const mockResp =
      [
        {
          id: 1,
          phnNo: '01988841890',
          patientName: 'Monirozzaman',
          chiefComplain: 'faver'
        },
        {id: 2, phnNo: '01788841890', patientName: 'joy', chiefComplain: 'faver'},
        {id: 3, phnNo: '01888841890', patientName: 'joya', chiefComplain: 'faver'},
        {id: 4, phnNo: '01788841890', patientName: 'nalib', chiefComplain: 'faver'},
        {id: 5, phnNo: '01488841890', patientName: 'nabil', chiefComplain: 'faver'},
      ];
    return of(mockResp);
  }
}
