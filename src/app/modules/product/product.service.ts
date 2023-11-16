import {inject, Injectable} from '@angular/core';
import {PRODUCTS, SHOPPING_CART_ITEMS} from "./mock-products";
import {Product} from "./product";
import {ProductModule} from "./product.module";
import {MatSnackBar} from "@angular/material/snack-bar";

export type ProductBase = Pick<Product, "name" | "price" | "description">

export interface ProductInput extends ProductBase {
  image: File
}

@Injectable({
  providedIn: ProductModule
})
export class ProductService {
  private snackBar = inject(MatSnackBar)

  create(product: ProductInput) {
    const id = (Math.floor(Math.random() * (999 - 100) + 100) + new Date().getTime()).toString()

    const data = {
      ...product,
      id,
      createdAt: new Date().toISOString(),
      image: URL.createObjectURL(product.image),
    }

    PRODUCTS.unshift(data);

    this.snackBar.open(`product ${product.name} was created`, "close")
    return product;
  }

  list(): Product[] {
    console.log("listing products", PRODUCTS)
    return PRODUCTS;
  }

  listShoppingCartItems(): Product[] {
    console.log("listing shopping cart items", SHOPPING_CART_ITEMS)
    return SHOPPING_CART_ITEMS;
  }

  addToShoppingCart(product: Product) {
    console.log("adding to shopping cart", product)
    this.snackBar.open(`${product.name} added to cart`, "close")
    SHOPPING_CART_ITEMS.unshift(product);
  }

  removeFromShoppingCart(product: Product): void {
    console.log("removing to shopping cart", product)
    const id = SHOPPING_CART_ITEMS.findIndex(value => value.id === product.id);
    this.snackBar.open(`${product.name} removed from cart`, "close")
    SHOPPING_CART_ITEMS.splice(id, 1);
  }
}
