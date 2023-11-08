import {Component} from '@angular/core';
import {SHOPPING_CART_ITEMS} from "../../modules/product/mock-products";
import {ProductListComponent} from '../../modules/product/product-list/product-list.component';

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss'],
  standalone: true,
  imports: [ProductListComponent]
})
export class ShoppingCartPageComponent {
  products = SHOPPING_CART_ITEMS;

}
