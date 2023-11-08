import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ProductListComponent} from "./product-list/product-list.component";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    ProductListComponent,
  ],
  exports: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    NgOptimizedImage
  ]
})
export class ProductModule {
}
