import {effect, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {firstValueFrom, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private http = inject(HttpClient)
  cartItems = signal(0)

  constructor() {
    firstValueFrom(this.http.get<{ count: number }>(`${environment.apiURL}/shoppingCart/${environment.user}/count`))
      .then(value => this.cartItems.set(value.count))
    effect(() => {
      console.log(`cart items: ${this.cartItems()}`)
    });
  }
}
