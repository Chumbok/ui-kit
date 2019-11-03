import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../../service/menu.service';
import {Menu} from '../../../model/menu';

@Component({
  selector: 'app-template-sidenav',
  templateUrl: './template-sidenav.component.html'
})
export class TemplateSidenavComponent implements OnInit {

  menus: Menu[];

  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.menuService.getMenus().subscribe(res => {
      this.menus = res;
    });
  }

  getMenuURL(menuIndex) {
    return this.menus[menuIndex].routerLink;
  }

  getMenuItemURL(menuIndex, menuItemIndex) {
    return this.menus[menuIndex].menuItems[menuItemIndex].routerLink;
  }

  getId(menuIndex) {
    return this.menus[menuIndex].id;
  }
}
