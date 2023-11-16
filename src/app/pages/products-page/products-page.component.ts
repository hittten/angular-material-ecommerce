import {Component, inject} from '@angular/core';
import {ProductListComponent} from '../../modules/product/product-list/product-list.component';
import {ProductService} from "../../modules/product/product.service";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {Product} from "../../modules/product/product";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
  standalone: true,
  imports: [ProductListComponent, MatButtonModule, MatIconModule, RouterLink]
})
export class ProductsPageComponent {
  productService = inject(ProductService)
  products = this.productService.list()

  addToShoppingCart(product: Product) {
    console.log("addToShoppingCart", product)
    this.productService.addToShoppingCart(product)
  }
}
