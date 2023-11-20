import {Component, inject, OnDestroy} from '@angular/core';
import {ProductService} from "../../modules/product/product.service";
import {ProductModule} from "../../modules/product/product.module";
import {Product} from "../../modules/product/product";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss'],
  standalone: true,
  imports: [ProductModule]
})
export class ShoppingCartPageComponent implements OnDestroy {
  private destroy = new Subject<void>();
  productService = inject(ProductService)
  products$ = this.productService.listShoppingCartItems()

  removeFromShoppingCart(product: Product) {
    this.productService.removeFromShoppingCart(product)
      .pipe(takeUntil(this.destroy))
      .subscribe(() => {
        this.products$ = this.productService.listShoppingCartItems();
      });
  }

  ngOnDestroy(): void {
    this.destroy.next()
  }
}
