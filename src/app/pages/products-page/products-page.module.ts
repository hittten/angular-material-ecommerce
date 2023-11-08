import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsPageRoutingModule} from './products-page-routing.module';
import {ProductsPageComponent} from './products-page.component';
import {ProductModule} from "../../modules/product/product.module";

@NgModule({
  declarations: [
    ProductsPageComponent
  ],
  imports: [
    CommonModule,
    ProductsPageRoutingModule,
    ProductModule,
  ]
})
export class ProductsPageModule {
}
