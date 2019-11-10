import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {UserInfoService} from './user-info.service';

@Injectable({providedIn: 'root'})
export class UserInfoMockService implements UserInfoService {

  public fetchLoggedInUserInfo() {

    return of({});
  }

  public getDisplayName(): string {

    return 'John Doe';
  }

  public getProfilePicture28x28pxUrl?(): string {
    console.log('Returning mock profilePicture28x28pxUrl because environment.chumbok.enableMock=true.');
    return '/assets/image/user.png';
  }

  public getProfilePictureUrl(): string {
    console.log('Returning mock profilePictureUrl because environment.chumbok.enableMock=true.');
    return 'profilePictureUrl';
  }

  public getSelectedTheme(): string {
    console.log('Returning mock selectedTheme because environment.chumbok.enableMock=true.');
    return 'light';
  }

  public getSelectedLanguage(): string {
    console.log('Returning mock selectedLanguage because environment.chumbok.enableMock=true.');
    return 'en';
  }
}
