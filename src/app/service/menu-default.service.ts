import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Menu, MenuItem} from '../model/menu';
import {MenuService} from './menu.service';
import {MenuUaaService} from '../uaa/service/menu-uaa.service';
import {MenuDentistPointDoctorService} from '../dentist-point/services/menu-dentist-point-doctor.service';
import {MenuServerManagerService} from '../server-manager/service/menu-server-manager.service';
import {environment} from '../../environments/environment';
import {MenuDentistPointPatientService} from '../dentist-point/services/menu-dentist-point-patient.service';

@Injectable()
export class MenuDefaultService implements MenuService {

  constructor() {
  }

  getMenus(): Observable<Menu[]> {
    if (environment.chumbok['appName'] === 'uaa') {
      return new MenuUaaService().getMenus();
    } else if (environment.chumbok['appName'] === 'dentist-point') {
      if (localStorage.getItem('loginType') === 'loginDoctor') {
        return new MenuDentistPointDoctorService().getMenus();
      } else if (localStorage.getItem('loginType') === 'loginPatient') {
        return new MenuDentistPointPatientService().getMenus();
      } else {
        return this.defaultMenu();
      }
    } else if (environment.chumbok['appName'] === 'server-manager') {
      return new MenuServerManagerService().getMenus();
    } else {
      return this.defaultMenu();
    }
  }

  private defaultMenu(): Observable<Menu[]> {

    const menuItem1: MenuItem = new MenuItem();
    menuItem1.iconCssClass = 'fas fa-bug fa-fw';
    menuItem1.routerLink = '';
    menuItem1.text = 'Submenu 1';

    const menu1 = new Menu();
    menu1.id = '#menu1';
    menu1.title = 'Menu 1';
    menu1.iconCssClass = 'fas fa-brain fa-fw';
    menu1.routerLink = '';
    menu1.menuItems = [menuItem1];

    const menu2 = new Menu();
    menu2.id = '#menu2';
    menu2.title = 'Menu 2';
    menu2.iconCssClass = 'fab fa-canadian-maple-leaf fa-fw';
    menu2.routerLink = '';
    menu2.menuItems = [];

    return of([menu1, menu2]);
  }
}
