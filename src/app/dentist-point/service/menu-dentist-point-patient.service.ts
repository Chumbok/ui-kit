import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {Menu, MenuItem} from '../../shared/model/menu';
import {MenuService} from '../../shared/service/menu.service';

@Injectable()
export class MenuDentistPointPatientService implements MenuService {

  menus: Menu[] = [];

  constructor() {

    const menuItem1: MenuItem = new MenuItem();
    menuItem1.iconCssClass = 'far fa-calendar-check fa-fw';
    menuItem1.routerLink = '/dentist-point/patient/create-appointment';
    menuItem1.text = 'Create Appointment';

    const menuItem2: MenuItem = new MenuItem();
    menuItem2.iconCssClass = 'fas fa-file-medical fa-fw';
    menuItem2.routerLink = '/dentist-point/patient/show-prescription-list';
    menuItem2.text = 'Prescription list';

    const menuItem3: MenuItem = new MenuItem();
    menuItem3.iconCssClass = 'fas fa-file-medical fa-fw';
    menuItem3.routerLink = '/dentist-point/patient/show-appointment-list';
    menuItem3.text = 'Appointment list';

    const menu = new Menu();
    menu.id = '#dentistmanagement';
    menu.title = 'Patient ONE';
    menu.iconCssClass = 'fas fa-user-md fa-fw';
    menu.menuItems = [menuItem1, menuItem2, menuItem3];
    this.menus = [menu];
  }

  getMenus(): Observable<Menu[]> {
    return of(this.menus);
  }
}
