import { RouterModule } from '@angular/router';
import { NgToastModule } from 'ng-angular-popup';
import { NgToastService } from 'ng-angular-popup';
import { CartService } from '../../../services/cart/cart.service';

// Components
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterModule, NgToastModule, NavbarComponent, FooterComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cart: any[] = [];

  constructor(
    private toast: NgToastService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    console.log('Cart:', this.cart);
  }

  removeItem(product: any) {
    this.cartService.removeItem(product);
    this.toast.success({detail: 'Notification', summary: 'Deleted to cart'});
    this.cart = this.cartService.getCart(); // Cập nhật danh sách sản phẩm trong giỏ hàng
  }

  clearCart() {
    this.cartService.clearCart();
    this.cart = this.cartService.getCart(); // Cập nhật danh sách sản phẩm trong giỏ hàng
  }

  updateQuantity(product: any, quantity: number) {
    this.cartService.updateQuantity(product, quantity);
    this.cart = this.cartService.getCart(); // Cập nhật danh sách sản phẩm trong giỏ hàng
  }
}
