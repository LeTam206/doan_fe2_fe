import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];

  constructor() {
    this.loadCart();
  }

  addToCart(product: any) {
    const existingProduct = this.cart.find(
      (item) => item.product.id === product.id
    );
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cart.push({ product: product, quantity: 1 });
    }
    this.saveCart();
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
    return this.cart;
  }

  removeItem(product: any) {
    const index = this.cart.findIndex((item) => item.product.id === product.id);
    if (index > -1) {
      this.cart.splice(index, 1);
      this.saveCart();
    }
  }

  updateQuantity(product: any, quantity: number) {
    const existingProduct = this.cart.find(
      (item) => item.product.id === product.id
    );
    if (existingProduct) {
      existingProduct.quantity = quantity;
      if (existingProduct.quantity <= 0) {
        this.removeItem(product);
      } else {
        this.saveCart();
      }
    }
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  private loadCart() {
    const cart = localStorage.getItem('cart');
    if (cart) {
      this.cart = JSON.parse(cart);
    }
  }
}
