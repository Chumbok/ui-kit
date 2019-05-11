import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {EmptyObservable} from 'rxjs-compat/observable/EmptyObservable';
import {PrescriptionService} from './prescription.service';
import {CreateDrug} from '../model/create-medicine';

@Injectable({providedIn: 'root'})
export class PrescriptionMockService implements PrescriptionService {

  constructor() {
  }

  public getPrescriptionList(patientId, currentPage): Observable<any> {
    console.log(currentPage);
    const mockResp = {
      page: currentPage,
      size: 3,
      totalPages: 3,
      totalElements: 9,
      items: [
        {
          id: '9388c9ea-f453-41de-96cb-d388dedbf091',
          phnNo: '01488841890',
          submitDate: 'July 12, 2019',
          patientName: 'Rakib miah',
          chiefComplain: 'Dengue fever'
        },
        {
          id: '9388c9ea-f453-41de-96cb-d388dedb2345',
          phnNo: '01788841890',
          submitDate: 'July 12, 2019',
          patientName: 'Kobir',
          chiefComplain: 'Jaundice'
        }
        ,
        {
          id: '1',
          phnNo: '01977841890',
          submitDate: 'July 12, 2019',
          patientName: 'Jasim',
          chiefComplain: 'faver'
        },
        {
          id: '9388c9ea-f453-41de-96cb-d388dedb7890',
          phnNo: '01988841890',
          submitDate: 'July 12, 2019',
          patientName: 'Joya ahsan',
          chiefComplain: 'Tooth Decay'
        },
        {
          id: '1',
          phnNo: '01968841890',
          submitDate: 'July 12, 2019',
          patientName: 'Hasan',
          chiefComplain: 'faver'
        }]

    };
    return of(mockResp);
  }

  public getPrescriptionView(): Observable<any> {

    const templateList = {
      page: 0,
      size: 10,
      totalPages: 1,
      totalElements: 3,
      items: [
        {
          id: '9388c9ea-f453-41de-96cb-d388dedbf091',
          templateName: 'Dengue fever',
          chiefComplain: 'Sudden-onset fever, headache (located behind the eyes), muscle and joint pains, and a rash.',
          parameters: '',
          remarks: '',
          dentalHistory: '',
          vaccinationHistory: '',
          investigation: '',
          radiological: '',
          planning: '',
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
            }]
        },
        {
          id: '9388c9ea-f453-41de-96cb-d388dedb2345',
          templateName: 'Jaundice',
          chiefComplain: 'Yellow tinge to the skin and vomiting.',
          parameters: '',
          remarks: '',
          dentalHistory: '',
          vaccinationHistory: '',
          investigation: '',
          radiological: '',
          planning: 'Bilirubin tests',
          medicines: [
            {
              drugType: 'Tab',
              medicineName: 'Iron supplements',
              drugStrength: '10mg',
              drugDose: '1+1+1',
              drugDuration: '30 day'
            }]
        },
        {
          id: '9388c9ea-f453-41de-96cb-d388dedb7890',
          templateName: 'Tooth Decay',
          chiefComplain: 'Bleeding into mouth and grey',
          parameters: 'Your dentist may discuss a filling or crown with you',
          remarks: 'Grey, brown or black spots appearing on your teeth(an unpleasant taste in your mouth)',
          dentalHistory: '',
          vaccinationHistory: '',
          investigation: '',
          radiological: '',
          planning: 'Limit your intake of sugary foods and drinks(Protect Your Teeth with Fluoride)',
          medicines: [
            {
              drugType: 'Tab',
              medicineName: 'Metformin',
              drugStrength: '10mg',
              drugDose: '1+1+1',
              drugDuration: '365 day'
            }]
        }]
    };
    return of(templateList);
  }

  public deleteTemplate(templateId: string): Observable<any> {
    console.log(templateId);
    const mockResp =
      [
        {
          id: 1,
          phnNo: '01988841890', patientName: 'Monirozzaman', chiefComplain: 'faver'
        },
        {id: 2, phnNo: '01788841890', patientName: 'joy', chiefComplain: 'faver'},
        {id: 3, phnNo: '01888841890', patientName: 'joya', chiefComplain: 'faver'},
        {id: 4, phnNo: '01788841890', patientName: 'nalib', chiefComplain: 'faver'},
        {id: 5, phnNo: '01488841890', patientName: 'nabil', chiefComplain: 'faver'},
      ];
    return of(mockResp);
  }

  public getPatientProfile(patientId: string): Observable<any> {
    const mockResp =
      [
        {
          id: '64244067-e89b-12d3-a456-556642442133', phnNo: '+88 019 888 41 890', patientName: 'Monirozzaman Roni',
          address: 'Aulia,savar,dhaka'
        }
      ];
    console.log(patientId);
    return of(mockResp);
  }

  public createPrescription(id: string,
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
                            medicineList: CreateDrug[]): Observable<any> {
    console.log(id);
    console.log(complain);
    console.log(parameters);
    console.log(remarks);
    console.log(dentalHistory);
    console.log(vaccinationHistory);
    console.log(investigation);
    console.log(rediological);
    console.log(medicineList);
    console.log(phoneNumber);
    console.log(patientName);
    console.log(address);
    return new EmptyObservable<Response>();

  }
}
