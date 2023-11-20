import {inject, Injectable} from '@angular/core';
import {Product} from "./product";
import {ProductModule} from "./product.module";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Observable, switchMap, tap} from "rxjs";
import {AppService} from "../../app.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

export type ProductBase = Pick<Product, "name" | "price" | "description">

export interface ProductInput extends ProductBase {
  image: File
}

const apiURL = {
  products: `${environment.apiURL}/products/${environment.user}`,
  shoppingCart: `${environment.apiURL}/shoppingCart/${environment.user}`,
};

@Injectable({
  providedIn: ProductModule
})
export class ProductService {
  private snackBar = inject(MatSnackBar)
  private app = inject(AppService)
  private http = inject(HttpClient)

  create(product: ProductInput): Observable<Product> {
    return this.toBase64(product.image)
      .pipe(
        tap(image => console.log(image)),
        switchMap(image => this.http.post<Product>(apiURL.products, {...product, image})),
        tap(product => {
          this.snackBar.open(`product ${product.name} was created`, "close");
          console.log(product, 'was created')
        }),
      )
  }

  list(): Observable<Product[]> {
    return this.http.get<Product[]>(apiURL.products).pipe(
      tap(() => console.log('listing products'))
    );
  }

  listShoppingCartItems(): Observable<Product[]> {
    return this.http.get<Product[]>(apiURL.shoppingCart).pipe(
      tap(() => console.log('listing shopping cart'))
    );
  }


  addToShoppingCart(product: Product): Observable<string> {
    return this.http.put(`${apiURL.shoppingCart}/${product.id}`, null, {responseType: 'text'})
      .pipe(
        tap(() => {
          this.app.cartItems.update(c => ++c)
          this.snackBar.open(`${product.name} added to cart`, "close")
          console.log(product, 'was added to shopping cart');
        })
      );
  }

  removeFromShoppingCart(product: Product): Observable<string> {
    return this.http.delete(`${apiURL.shoppingCart}/${product.id}`, {responseType: 'text'})
      .pipe(
        tap(() => {
          this.app.cartItems.update(c => --c)
          this.snackBar.open(`${product.name} removed from cart`, "close")
          console.log(product, 'was removed from shopping cart');
        })
      );
  }

  private toBase64(file: Blob) {
    return new Observable<string | ArrayBuffer>(subscriber => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (!reader.result) {
          subscriber.error(new Error('null result'))
          return;
        }

        subscriber.next(reader.result);
      };
      reader.onerror = (error) => subscriber.error(error);
      reader.onloadend = () => subscriber.complete();
    })
  }
}
