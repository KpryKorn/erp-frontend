import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterModule],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  ROUTES = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: 'pi pi-fw pi-th-large',
    },
    {
      name: 'Staff',
      path: '/dashboard/staff',
      icon: 'pi pi-fw pi-users',
    },
    {
      name: 'Clients',
      path: '/dashboard/clients',
      icon: 'pi pi-fw pi-address-book',
    },
    {
      name: 'Products',
      path: '/dashboard/products',
      icon: 'pi pi-fw pi-box',
    },
    {
      name: 'Sales',
      path: '/dashboard/sales',
      icon: 'pi pi-fw pi-shopping-cart',
    },
    {
      name: 'Stock',
      path: '/dashboard/stock',
      icon: 'pi pi-fw pi-warehouse',
    },
  ];

  getCurrentYear() {
    return new Date().getFullYear();
  }
}
