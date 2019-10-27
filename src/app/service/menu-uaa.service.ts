import {Injectable} from '@angular/core';
import {Menu, MenuItem} from '../model/menu';
import {MenuService} from './menu.service';
import {Observable, of} from 'rxjs';

@Injectable()
export class MenuUaaService implements MenuService {

  menus: Menu[];

  constructor() {

    const menuItem1: MenuItem = new MenuItem();
    menuItem1.iconCssClass = 'far fa-building';
    menuItem1.routerLink = '/orgs';
    menuItem1.text = 'Org List';

    const menu1 = new Menu();
    menu1.id = '#usermanagement';
    menu1.title = 'User Management';
    menu1.iconCssClass = 'fas fa-user-astronaut fa-fw';
    menu1.routerLink = '/orgs';
    menu1.menuItems = []

    const menu2 = new Menu();
    menu2.id = '#settings';
    menu2.title = 'Settings';
    menu2.iconCssClass = 'fa fa-cog fa-fw';
    menu2.routerLink = '/settings';
    menu2.menuItems = [];

    this.menus = [menu1, menu2];
  }

  getMenus(): Observable<Menu[]> {
    return of(this.menus);
  }
}
