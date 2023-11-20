import {Component, DestroyRef, inject} from '@angular/core';
import {ProductService} from "../../modules/product/product.service";
import {ProductModule} from "../../modules/product/product.module";
import {Product} from "../../modules/product/product";
import {takeUntilDestroyed, toSignal} from "@angular/core/rxjs-interop";
import {BehaviorSubject, switchMap} from "rxjs";

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss'],
  standalone: true,
  imports: [ProductModule]
})
export class ShoppingCartPageComponent {
  private destroyRef = inject(DestroyRef)
  private updateCart = new BehaviorSubject<void>(undefined)
  private productService = inject(ProductService)

  products = toSignal(
    this.updateCart.pipe(
      switchMap(() => this.productService.listShoppingCartItems())
    )
  )

  removeFromShoppingCart(product: Product) {
    // TODO: show await way.
    this.productService.removeFromShoppingCart(product)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.updateCart.next()
      });
  }
}
