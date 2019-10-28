import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Menu, MenuItem} from '../model/menu';
import {MenuService} from './menu.service';

@Injectable()
export class MenuDefaultService implements MenuService {

  menus: Menu[];

  constructor() {

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

    this.menus = [menu1, menu2];
  }

  getMenus(): Observable<Menu[]> {
    return of(this.menus);
  }
}