import { RouterModule, RouterOutlet, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product/product.service';

// Components
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    ProductListComponent,
    CommentComponent,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe(
      (data) => {
        this.product = data;
      },
      (error) => {
        console.error('There was an error!', error);
      }
    );
  }
}
