import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {DoctorAuthService} from './doctor.auth.service';
import {DoctorChamber} from '../model/doctor-chamber';

@Injectable({providedIn: 'root'})
export class DoctorAuthMockService implements DoctorAuthService {

  private loggedIn = false;

  public doctorLogin(username: string, password: string) {
    console.log('HTTP login is disabled because environment.chumbok.enableMock=true.');
    this.loggedIn = true;
    return of({});
  }

  public logout() {
    console.log('HTTP logout is disabled because environment.chumbok.enableMock=true.');
    this.loggedIn = false;
  }

  public refreshToken() {
    console.log('HTTP refreshToken is disabled because environment.chumbok.enableMock=true.');
    return of({});
  }

  public removeAuthToken(): void {
    console.log('removeAuthToken is not needed because environment.chumbok.enableMock=true.');
  }

  public isLoggedIn(): boolean {
    console.log('removeAuthToken is not needed because environment.chumbok.enableMock=true.');
    return this.loggedIn;
  }

  public getAuthToken(): string {
    console.log('Returning mock token because environment.chumbok.enableMock=true.');
    return 'mockToken';
  }

  signUp(name: String, gender: String, qualification: String, email: String, address: String, chambers: Array<DoctorChamber>,
         phoneNo: String, password: String): Observable<any> {

    const json = '{"id":"hg34-435hbg6-45hgy"}';
    return of(JSON.parse(json));
  }

}
