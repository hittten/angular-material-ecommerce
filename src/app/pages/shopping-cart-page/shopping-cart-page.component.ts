import {Component, inject} from '@angular/core';
import {ProductListComponent} from '../../modules/product/product-list/product-list.component';
import {ProductService} from "../../modules/product/product.service";
import {Product} from "../../modules/product/product";

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss'],
  standalone: true,
  imports: [ProductListComponent]
})
export class ShoppingCartPageComponent {
  productService = inject(ProductService)
  products = this.productService.listShoppingCartItems()

  removeFromShoppingCart(product: Product) {
    this.productService.removeFromShoppingCart(product)
  }
}
