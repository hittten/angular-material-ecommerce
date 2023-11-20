import {Component, inject} from '@angular/core';
import {ProductService} from "../../modules/product/product.service";
import {ProductModule} from "../../modules/product/product.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {Product} from "../../modules/product/product";
import {toSignal} from "@angular/core/rxjs-interop";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
  standalone: true,
  imports: [ProductModule, MatButtonModule, MatIconModule, RouterLink]
})
export class ProductsPageComponent {
  productService = inject(ProductService)
  products = toSignal(this.productService.list())

  addToShoppingCart(product: Product) {
    firstValueFrom(this.productService.addToShoppingCart(product))
      .then()
  }
}
