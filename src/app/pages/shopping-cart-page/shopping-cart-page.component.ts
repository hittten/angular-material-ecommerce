import {Component} from '@angular/core';
import {SHOPPING_CART_ITEMS} from "../../modules/product/mock-products";

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss']
})
export class ShoppingCartPageComponent {
  products = SHOPPING_CART_ITEMS;

}
