import { Component } from '@angular/core';
import { BasePageComponent } from '../../../base-page.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  imports: [SidebarComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent extends BasePageComponent {}
