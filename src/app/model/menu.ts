export class Menu {
  id: string;
  title: string;
  iconCssClass: string;
  routerLink: string;
  menuItems: MenuItem[];
}

export class MenuItem {
  iconCssClass: string;
  routerLink: string;
  text: string;
}
