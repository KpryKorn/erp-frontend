import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { BasePageComponent } from '../../../base-page.component';

@Component({
  selector: 'app-page-not-found',
  imports: [],
  templateUrl: './page-not-found.component.html',
})
export class PageNotFoundComponent extends BasePageComponent {
  private readonly router = inject(Router);
  private readonly location = inject(Location);

  goHome(): void {
    this.router.navigate(['/']);
  }

  goBack(): void {
    this.location.back();
  }
}
