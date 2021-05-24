import {Component, inject} from '@angular/core';
import {ProductListComponent} from '../../modules/product/product-list/product-list.component';
import {ProductService} from "../../modules/product/product.service";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
  standalone: true,
  imports: [ProductListComponent]
})
export class ProductsPageComponent {
  productService = inject(ProductService)
  products = this.productService.list()
}
