import { Component } from '@angular/core';
import { NgToastModule } from 'ng-angular-popup';
import { NgToastService } from 'ng-angular-popup';
import { ProductService } from '../../../services/product/product.service';

// Components
import { BannerComponent } from '../banner/banner.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgToastModule, BannerComponent, ProductListComponent, NavbarComponent ,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor( private productService: ProductService, private toast: NgToastService ){}

  showToastSuccess(){
    this.toast.success({detail:"Thành công!", summary:'Your Success Message', duration:5000});
  }
}
