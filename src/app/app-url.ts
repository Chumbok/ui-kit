/**
 This class is used for static route.
 */
export class AppUrl {

  public static DASHBOARD = 'dashboard';
  public static SETTINGS = 'settings';
  public static LOGIN = 'login';
  public static LOGOUT = 'logout';

  public static ORGS = 'orgs/';
  public static ORGS_CREATE = AppUrl.ORGS + 'create';

  public static DOCTOR = 'doctors/';
  public static DOCTOR_LOGIN = AppUrl.DOCTOR + 'login';
  public static DOCTOR_SIGNUP = AppUrl.DOCTOR + 'signUp';
  public static DOCTOR_LOGOUT = AppUrl.DOCTOR + 'logout';
  public static DOCTOR_CALENDER_VIEW = AppUrl.DOCTOR + 'calendar-view';
  public static DOCTOR_CREATEP_PRESCRIPTION = AppUrl.DOCTOR + 'create-prescription';
  public static DOCTOR_PRESCRIPTION_LIST = AppUrl.DOCTOR + 'prescription-list';
  public static DOCTOR_CREATE_TEMPLATE = AppUrl.DOCTOR + 'create-template';
  public static DOCTOR_APPOINTMENT_LIST = AppUrl.DOCTOR + 'appointment-list';

  public static PATIENT = 'patient/';
  public static PATIENT_CREATE_PATIENT = AppUrl.PATIENT + 'create-patient';
  public static PATIENT_CREATE_APPOINTMENT = AppUrl.PATIENT + 'create-appointment';
}
