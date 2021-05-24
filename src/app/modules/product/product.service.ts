import {Injectable} from '@angular/core';
import {PRODUCTS, SHOPPING_CART_ITEMS} from "./mock-products";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  list(): Product[] {
    return PRODUCTS;
  }

  listShoppingCartItems(): Product[] {
    return SHOPPING_CART_ITEMS
  }
}
