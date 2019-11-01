import {Injectable} from '@angular/core';

@Injectable()
export abstract class AuthTokenService {

  abstract getAuthToken(): string;

  abstract isLoggedIn(): boolean;
}
