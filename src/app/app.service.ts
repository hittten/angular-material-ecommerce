import {effect, Injectable, signal} from '@angular/core';
import {SHOPPING_CART_ITEMS} from "./modules/product/mock-products";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  cartItems = signal(SHOPPING_CART_ITEMS.length)

  constructor() {
    effect(() => {
      console.log(`cart items: ${this.cartItems()}`)
    });
  }
}
