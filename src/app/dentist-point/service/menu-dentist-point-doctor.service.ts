import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {Menu, MenuItem} from '../../shared/model/menu';
import {MenuService} from '../../shared/service/menu.service';

@Injectable()
export class MenuDentistPointDoctorService implements MenuService {

  menus: Menu[] = [];

  constructor() {

    const menuItem1: MenuItem = new MenuItem();
    menuItem1.iconCssClass = 'far fa-calendar-alt fa-fw';
    menuItem1.routerLink = '/dentist-point/doctors/calendar-view';
    menuItem1.text = 'Calendar View';

    const menuItem2: MenuItem = new MenuItem();
    menuItem2.iconCssClass = 'far fa-calendar-check fa-fw';
    menuItem2.routerLink = '/dentist-point/doctors/create-appointment';
    menuItem2.text = 'Create Appointment';

    const menuItem3: MenuItem = new MenuItem();
    menuItem3.iconCssClass = 'fas fa-pills fa-fw';
    menuItem3.routerLink = '/dentist-point/doctors/create-prescription';
    menuItem3.text = 'Create Prescription';

    const menuItem4: MenuItem = new MenuItem();
    menuItem4.iconCssClass = 'fas fa-file-medical fa-fw';
    menuItem4.routerLink = '/dentist-point/doctors/prescription-list';
    menuItem4.text = 'Prescription List';

    const menuItem5: MenuItem = new MenuItem();
    menuItem5.iconCssClass = 'far fa-list-alt fa-fw';
    menuItem5.routerLink = '/dentist-point/doctors/create-template';
    menuItem5.text = 'Create Template';

    const menuItem6: MenuItem = new MenuItem();
    menuItem6.iconCssClass = 'fas fa-file-medical fa-fw';
    menuItem6.routerLink = '/dentist-point/doctors/appointment-list';
    menuItem6.text = 'Appointment list';

    const menu = new Menu();
    menu.id = '#dentistmanagement';
    menu.title = 'Doctor ONE';
    menu.iconCssClass = 'fas fa-user-md fa-fw';
    menu.menuItems = [menuItem1, menuItem2, menuItem3, menuItem4, menuItem5, menuItem6];
    this.menus = [menu];
  }

  getMenus(): Observable<Menu[]> {
    return of(this.menus);
  }
}
