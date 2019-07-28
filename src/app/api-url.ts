import {environment} from '../environments/environment';

/**
 * This file is used for all the service or api url, so if we need to chnage any api, we can do it from here.
 * Do not add  query param or path param.
 */

export class ApiUrl {
  public static BASE_URL = environment.chumbok.apiBaseEndpoint;

  public static UAA = ApiUrl.BASE_URL + 'uaa/';
  public static UAA_LOGIN = ApiUrl.UAA + 'login';
  public static UAA_LOGOUT = ApiUrl.UAA + 'logout';
  public static UAA_REFRESH = ApiUrl.UAA + 'refresh';
  public static UAA_ME = ApiUrl.UAA + 'me';
  public static UAA_ORGS = ApiUrl.UAA + 'orgs';
}
