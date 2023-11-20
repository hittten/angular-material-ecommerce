import {inject, Injectable} from '@angular/core';
import {Product} from "./product";
import {delay, Observable, of, pipe, switchMap, tap} from "rxjs";
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
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient)

  create(product: ProductInput): Observable<Product> {
    return this.toBase64(product.image)
      .pipe(
        tap(image => console.log(image)),
        switchMap(image => this.http.post<Product>(apiURL.products, {...product, image})),
        tap(product => console.log(product, 'was created')),
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
        tap(() => console.log(product, 'was added to shopping cart'))
      );
  }

  removeFromShoppingCart(product: Product): Observable<string> {
    return this.http.delete(`${apiURL.shoppingCart}/${product.id}`, {responseType: 'text'})
      .pipe(
        tap(() => console.log(product, 'was removed from shopping cart'))
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
