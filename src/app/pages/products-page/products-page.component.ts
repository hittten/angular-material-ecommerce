import {Component, inject, OnDestroy} from '@angular/core';
import {ProductService} from "../../modules/product/product.service";
import {ProductModule} from "../../modules/product/product.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {Product} from "../../modules/product/product";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
  standalone: true,
  imports: [ProductModule, MatButtonModule, MatIconModule, RouterLink]
})
export class ProductsPageComponent implements OnDestroy {
  private shoppingCartSubscription?: Subscription;
  productService = inject(ProductService)
  products$ = this.productService.list()

  addToShoppingCart(product: Product) {

    this.shoppingCartSubscription = this.productService.addToShoppingCart(product)
      .subscribe();
  }

  ngOnDestroy(): void {
    this.shoppingCartSubscription?.unsubscribe();
  }
}
