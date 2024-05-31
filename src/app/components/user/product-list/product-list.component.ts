import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { NgToastService } from 'ng-angular-popup';
import { ProductService } from '../../../services/product/product.service';
import { CartService } from '../../../services/cart/cart.service';

// Components
import { Component } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterModule, HttpClientModule, NgToastModule, ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: any[] = [];

  constructor(private toast: NgToastService, private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('There was an error!', error);
      }
    );
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    // alert(`${product.name} has been added to the cart!`);
    this.toast.success({detail: 'Notification', summary: 'Added to cart'});
  }

}
