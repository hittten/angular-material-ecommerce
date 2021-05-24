import {Component, inject} from '@angular/core';
import {ProductService} from "../../modules/product/product.service";
import {ProductModule} from "../../modules/product/product.module";

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss'],
  standalone: true,
  imports: [ProductModule]
})
export class ShoppingCartPageComponent {
  productService = inject(ProductService)
  products = this.productService.listShoppingCartItems()
}
