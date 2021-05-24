import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ProductListComponent} from "./product-list/product-list.component";

// material
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatCardModule} from "@angular/material/card";

// locals
import {TooltipDirective} from "../../tooltip.directive";
import {EuroCurrencyPipe} from "../../euro-currency.pipe";
import {HighlightDirective} from "../../highlight.directive";

@NgModule({
  declarations: [
    ProductListComponent
  ],
  exports: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    TooltipDirective,
    EuroCurrencyPipe,
    HighlightDirective,
    MatButtonToggleModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    NgOptimizedImage,
  ]
})
export class ProductModule {
}
