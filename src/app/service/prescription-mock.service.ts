import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {EmptyObservable} from 'rxjs-compat/observable/EmptyObservable';
import {PrescriptionService} from './prescription.service';
import {CreateDrug} from '../model/create-medicine';
import {FlashMessageService} from './flash-message.service';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class PrescriptionMockService implements PrescriptionService {

  constructor(private flashMessageService: FlashMessageService, private router: Router) {
  }

  public getPrescriptionList(currentPage): Observable<any> {
    // console.log(currentPage);
    const mockResp = {
      page: currentPage,
      size: 3,
      totalPages: 3,
      totalElements: 9,
      items: [
        {
          id: '64244067-e89b-12d3-a456-556642442133',
          phnNo: '+88 019 888 41 890',
          submitDate: 'July 12, 2019',
          patientName: 'Monirozzaman Roni',
          chiefComplain: 'faver'
        },
        {
          id: '64244067-e89b-12d3-a456-556642441111',
          phnNo: '01968841890',
          submitDate: 'July 12, 2019',
          patientName: 'Hasan',
          chiefComplain: 'Tooth Decay'
        }
        ,
        {
          id: '64244067-e89b-12d3-a456-556642441111',
          phnNo: '01968841890',
          submitDate: 'July 12, 2019',
          patientName: 'Hasan',
          chiefComplain: 'Tooth Decay'
        },
        {
          id: '64244067-e89b-12d3-a456-55776642441111',
          phnNo: '01988841890',
          submitDate: 'July 12, 2019',
          patientName: 'Joya ahsan',
          chiefComplain: 'Tooth Decay'
        },
        {
          id: '64244067-e89b-12d3-a456-556642442133',
          phnNo: '+88 019 888 41 890',
          submitDate: 'July 12, 2019',
          patientName: 'Monirozzaman Roni',
          chiefComplain: 'faver'
        },
        {
          id: '64244067-e89b-12d3-a456-556642441111',
          phnNo: '01968841890',
          submitDate: 'July 12, 2019',
          patientName: 'Hasan',
          chiefComplain: 'Tooth Decay'
        }
        ,
        {
          id: '64244067-e89b-12d3-a456-556642441111',
          phnNo: '01968841890',
          submitDate: 'July 12, 2019',
          patientName: 'Hasan',
          chiefComplain: 'Tooth Decay'
        },
        {
          id: '64244067-e89b-12d3-a456-55776642441111',
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
          id: '64244067-e89b-12d3-a456-556642442133',
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
          id: '64244067-e89b-12d3-a456-556642441111',
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

  public getPatientProfile(patientId: string): Observable<any> {
    const mockResp = {
      items: [
        {
          id: '64244067-e89b-12d3-a456-556642442133',
          phnNo: '+88 019 888 41 890',
          submitDate: 'July 12, 2019',
          patientName: 'Monirozzaman Roni',
          address: 'Aulia,savar,dhaka'
        },
        {
          id: '64244067-e89b-12d3-a456-556642441111',
          phnNo: '01968841890',
          submitDate: 'July 12, 2019',
          patientName: 'Hasan',
          address: 'Aulia,savar,dhaka'
        }]


    };
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
                            date: string,
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
    console.log(date);
    this.router.navigate(['doctors/calendar-view']);
    this.flashMessageService.showFlashMessage({
        messages: ['Save Successfully '],
        dismissible: true,
        type: 'primary'
      }
    );
    return new EmptyObservable<Response>();

  }
}
