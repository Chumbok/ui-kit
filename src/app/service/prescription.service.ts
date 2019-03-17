import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {EmptyObservable} from 'rxjs-compat/observable/EmptyObservable';

@Injectable()
export class PrescriptionService {

  private enableMock: boolean = environment.chumbok.enableMock;
  private callThroughGateway: boolean = environment.chumbok.apiCallThroughGateway;


  private httpOptions = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.authService.getAuthToken()})
  };

  private authHeader = new HttpHeaders({'Authorization': 'Bearer ' + this.authService.getAuthToken()});

  constructor(private authService: AuthService, private http: HttpClient) {
  }


  public createPrescription(complain: string, parameters: string, remarks: string, dentalHistory: string, vaccinationHistory: string,
                            investigation: string, rediological: string, planning: string, drugType: string, medicinName: string,
                            drugStrength: string, drugDose: string, drugDuration: string): Observable<any> {
    console.log(complain);
    console.log(parameters);
    console.log(remarks);
    console.log(dentalHistory);
    console.log(vaccinationHistory);
    console.log(investigation);
    console.log(rediological);
    console.log(drugType);
    console.log(medicinName);
    console.log(drugStrength);
    console.log(drugDose);
    console.log(drugDuration);
    return new EmptyObservable<Response>() ;


  }


}
