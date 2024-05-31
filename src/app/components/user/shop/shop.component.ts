import { RouterModule } from '@angular/router';
import { NgToastModule } from 'ng-angular-popup';

// Components
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    RouterModule,
    NgToastModule,
    NavbarComponent,
    FooterComponent,
    ProductListComponent,
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent {
  isClickToast = true;

  showToast() {
    this.isClickToast = true;
  }
}
