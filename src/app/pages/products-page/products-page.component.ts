import {Component, inject} from '@angular/core';
import {ProductService} from "../../modules/product/product.service";
import {ProductModule} from "../../modules/product/product.module";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
  standalone: true,
  imports: [ProductModule]
})
export class ProductsPageComponent {
  productService = inject(ProductService)
  products = this.productService.list()
}
