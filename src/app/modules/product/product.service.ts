import {inject, Injectable} from '@angular/core';
import {PRODUCTS, SHOPPING_CART_ITEMS} from "./mock-products";
import {Product} from "./product";
import {ProductModule} from "./product.module";
import {MatSnackBar} from "@angular/material/snack-bar";
import {delay, Observable, of, tap} from "rxjs";
import {AppService} from "../../app.service";

export type ProductBase = Pick<Product, "name" | "price" | "description">

export interface ProductInput extends ProductBase {
  image: File
}

@Injectable({
  providedIn: ProductModule
})
export class ProductService {
  private snackBar = inject(MatSnackBar)
  private app = inject(AppService)

  create(product: ProductInput): Observable<Product> {
    const id = (Math.floor(Math.random() * (999 - 100) + 100) + new Date().getTime()).toString()

    const data = {
      ...product,
      id,
      createdAt: new Date().toISOString(),
      image: URL.createObjectURL(product.image),
    }

    PRODUCTS.unshift(data);

    return of(data).pipe(
      delay(500),
      tap(() => {
        this.snackBar.open(`product ${product.name} was created`, "close")
        console.log('product created!', data);
      })
    );
  }

  list(): Observable<Product[]> {
    return of(PRODUCTS).pipe(
      delay(500),
      tap((product) => console.log("listing products", product)),
    );
  }

  listShoppingCartItems(): Observable<Product[]> {
    return of([...SHOPPING_CART_ITEMS]).pipe(
      delay(500),
      tap((items) => console.log("listing shopping cart items", items)),
    );
  }

  addToShoppingCart(product: Product) {
    console.log("adding to shopping cart", product)
    SHOPPING_CART_ITEMS.unshift(product);

    return of('OK').pipe(
      delay(500),
      tap(() => {
        this.app.cartItems.update(c => ++c)
        this.snackBar.open(`${product.name} added to cart`, "close")
        console.log("product added!", product);
      })
    );
  }

  removeFromShoppingCart(product: Product): Observable<string> {
    console.log("removing to shopping cart", product)
    const id = SHOPPING_CART_ITEMS.findIndex(value => value.id === product.id);
    SHOPPING_CART_ITEMS.splice(id, 1);

    return of('OK').pipe(
      delay(500),
      tap(() => {
        this.app.cartItems.update(c => --c)
        this.snackBar.open(`${product.name} removed from cart`, "close")
        console.log('product removed!', product);
      })
    );
  }
}
