import {Injectable} from '@angular/core';
import {LoggedInUserInfoService} from './logged-in-user-info.service';

@Injectable({providedIn: 'root'})
export class LoggedInUserInfoMockService implements LoggedInUserInfoService {

  public getDisplayName(): string {
    console.log('Returning mock displayName because environment.chumbok.enableMock=true.');
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
