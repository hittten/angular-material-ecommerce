import {Component, inject, OnDestroy} from '@angular/core';
import {ProductListComponent} from '../../modules/product/product-list/product-list.component';
import {ProductService} from "../../modules/product/product.service";
import {Product} from "../../modules/product/product";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss'],
  standalone: true,
  imports: [ProductListComponent]
})
export class ShoppingCartPageComponent implements OnDestroy {
  private productsSubscription = new Subscription();
  productService = inject(ProductService)
  products$ = this.productService.listShoppingCartItems()

  removeFromShoppingCart(product: Product) {
    this.productsSubscription = this.productService.removeFromShoppingCart(product)
      .subscribe(() => {

        this.products$ = this.productService.listShoppingCartItems();
      });
  }

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }
}
