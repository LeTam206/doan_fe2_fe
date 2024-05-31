import { Routes } from '@angular/router';
import { HomeComponent } from './components/user/home/home.component';
import { ShopComponent } from './components/user/shop/shop.component';
import { CartComponent } from './components/user/cart/cart.component';
import { FavoriteComponent } from './components/user/favorite/favorite.component';
import { ProductDetailComponent } from './components/user/product-detail/product-detail.component';
import { CheckoutComponent } from './components/user/checkout/checkout.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';

export const routes: Routes = [
    // Login and register
    { path: 'login', component: LoginComponent, title: 'PHONEX | Login'},
    { path: 'register', component: RegisterComponent, title: 'PHONEX | Register'},
    // User
    { path: '', component: HomeComponent, title: 'PHONEX | Home'},
    { path: 'home', component: HomeComponent, title: 'PHONEX | Home' },
    { path: 'shop', component: ShopComponent, title: 'PHONEX | Shop' },
    { path: 'cart', component: CartComponent, title: 'PHONEX | Cart' },
    { path: 'check-out', component: CheckoutComponent, title: 'PHONEX | Check out' },
    { path: 'wish-list', component: FavoriteComponent, title: 'PHONEX | Wishlist' },
    { path: 'product/:id', component: ProductDetailComponent, title: 'PHONEX | Detail' },
    // Admin
    { path: 'admin', component: DashboardComponent, title: 'PHONEX | Admin' },
];
