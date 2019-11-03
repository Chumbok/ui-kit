import {Injectable} from '@angular/core';

@Injectable()
export abstract class LoggedInUserInfoService {

  abstract getDisplayName(): string;

  abstract getProfilePicture28x28pxUrl?(): string;

  abstract getProfilePictureUrl(): string;

  abstract getSelectedTheme(): string;

  abstract getSelectedLanguage(): string;

}
