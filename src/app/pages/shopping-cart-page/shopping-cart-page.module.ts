import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShoppingCartPageRoutingModule} from './shopping-cart-page-routing.module';
import {ShoppingCartPageComponent} from './shopping-cart-page.component';
import {ProductModule} from "../../modules/product/product.module";

@NgModule({
  declarations: [
    ShoppingCartPageComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartPageRoutingModule,
    ProductModule
  ]
})
export class ShoppingCartPageModule {
}
