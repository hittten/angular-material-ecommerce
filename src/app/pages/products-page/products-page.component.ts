import {Component, inject, OnDestroy} from '@angular/core';
import {ProductListComponent} from '../../modules/product/product-list/product-list.component';
import {ProductService} from "../../modules/product/product.service";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {Product} from "../../modules/product/product";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
  standalone: true,
  imports: [ProductListComponent, MatButtonModule, MatIconModule, RouterLink]
})
export class ProductsPageComponent implements OnDestroy {
  private shoppingCartSubscription: Subscription = new Subscription();
  productService = inject(ProductService)
  products$ = this.productService.list()

  addToShoppingCart(product: Product) {

    this.shoppingCartSubscription = this.productService.addToShoppingCart(product)
      .subscribe();
  }

  ngOnDestroy(): void {
    this.shoppingCartSubscription.unsubscribe();
  }
}
