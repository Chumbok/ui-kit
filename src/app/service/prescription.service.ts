import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Observable, of} from 'rxjs';
import {EmptyObservable} from "rxjs-compat/observable/EmptyObservable";
import {CreateDrug} from "../model/create-medicine";


@Injectable()
export class PrescriptionService {

  private enableMock: boolean = environment.chumbok.enableMock;
  private callThroughGateway: boolean = environment.chumbok.apiCallThroughGateway;

  private orgListEndpoint: string = this.callThroughGateway ?
    environment.chumbok.apiBaseEndpoint + '/uaa/orgs' : environment.chumbok.apiBaseEndpoint + '/orgs';

  private serviceBaseEndpoint: string = this.callThroughGateway ?
    environment.chumbok.apiBaseEndpoint + '/uaa' : environment.chumbok.apiBaseEndpoint;

  private httpOptions = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.authService.getAuthToken()})
  };

  private authHeader = new HttpHeaders({'Authorization': 'Bearer ' + this.authService.getAuthToken()});

  constructor(private authService: AuthService, private http: HttpClient) {
  }


  public createPrescription(id: string, complain: string, parameters: string, remarks: string, dentalHistory: string, vaccinationHistory: string,
                            investigation: string, rediological: string, planning: string, prescriptionList: Array<CreateDrug>): Observable<any> {
    console.log(id);
    console.log(complain);
    console.log(parameters);
    console.log(remarks);
    console.log(dentalHistory);
    console.log(vaccinationHistory);
    console.log(investigation);
    console.log(rediological);
    console.log(prescriptionList)

    return new EmptyObservable<Response>();


  }



  public getPrescriptionList(patientId: string): Observable<any> {
    return this.enableMock ? this.getPrescriptionListMock() : this.getPrescriptionListReal(patientId);
  }

  private getPrescriptionListReal(patientId: string): Observable<any> {
    return this.http.get<any>(this.serviceBaseEndpoint + patientId + '/prescription/', this.httpOptions);
  }

  private getPrescriptionListMock(): Observable<any> {

    const mockResp =
      '{"page":0,' +
      '"size":10,' +
      '"totalPages":1,' +
      '"totalElements":1,' +
      '"items":[{"id":"9388c9ea-f453-41de-96cb-d388dedbf091","patientName":"Rasel","chiefComplain":"Please maintain roles"},' +
      '{"id":"7388c9ea-f453-41de-96cb-d388dedbf091","patientName":"Roni","chiefComplain":"Please maintain roles"},' +
      '{"id":"8388c9ea-f453-41de-96cb-d388dedbf091","patientName":"Ross","chiefComplain":"Please maintain roles"}]}';


    return of(JSON.parse(mockResp));
  }


  public getPrescriptionView(): Observable<any> {
    return this.enableMock ? this.getPrescriptionViewMock() : this.getPrescriptionViewReal();
  }

  private getPrescriptionViewReal(): Observable<any> {
    return this.http.get<any>(this.serviceBaseEndpoint , this.httpOptions);
  }

  private getPrescriptionViewMock(): Observable<any> {

    const mockResp = '{"page":0,' +
      '"size":10,' +
      '"totalPages":1,' +
      '"totalElements":1,' +
      '"items":[' +
      '{' +
      '"id":"9388c9ea-f453-41de-96cb-d388dedbf091",' +
      '"chiefComplain":"Headache",' +
      '"parameters":"Somethings write JSON",' +
      '"remarks":"Somethings write JSON",' +
      '"dentalHistory":"Somethings write JSON",' +
      '"vaccinationHistory":" Somethings write JSON",' +
      '"investigation":"Somethings write JSON",' +
      '"radiological":"Somethings write JSON",' +
      '"planning":"Somethings write JSON",' +
      '"medicine":[{"drugType":"Tab","medicineName":"Napa","drugStrength":"10mg","drugDose":"1+1+1","drugDuration":"1 day"},' +
      '{"drugType":"cap","medicineName":"Napa","drugStrength":"10mg","drugDose":"1+1+1","drugDuration":"1 day"}]' +
      ',"roles":["SUPERADMIN"],"enabled":true' +
      '},' +
      '{' +
      '"id":"9388c9ea-f453-41de-96cb-d388dedbf091",' +
      '"chiefComplain":"Fever",' +
      '"parameters":"Somethings write JSON",' +
      '"remarks":"Somethings write JSON",' +
      '"dentalHistory":"Somethings write JSON",' +
      '"vaccinationHistory":" Somethings write JSON",' +
      '"investigation":"Somethings write JSON",' +
      '"radiological":"Somethings write JSON",' +
      '"planning":"Somethings write JSON",' +
      '"medicine":[{"drugType":"Tab","medicineName":"Napa Extra","drugStrength":"10mg","drugDose":"1+1+1","drugDuration":"1 day"}]' +
      ',"roles":["SUPERADMIN"],"enabled":true' +
      '}' +
      ']}';
    return of(JSON.parse(mockResp));
  }
}


