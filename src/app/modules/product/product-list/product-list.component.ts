import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../product";
import {ThemePalette} from "@angular/material/core";
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgFor, NgOptimizedImage, NgIf, UpperCasePipe, DatePipe, CurrencyPipe, AsyncPipe} from '@angular/common';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatCardModule} from "@angular/material/card";
import {TooltipDirective} from "../../../tooltip.directive";
import {HighlightDirective} from "../../../highlight.directive";
import {EuroCurrencyPipe} from "../../../euro-currency.pipe";
import {EMPTY, Observable} from "rxjs";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  imports: [
    NgFor,
    NgOptimizedImage,
    MatButtonModule,
    MatIconModule,
    NgIf,
    MatDividerModule,
    MatButtonToggleModule,
    UpperCasePipe,
    DatePipe,
    MatCardModule,
    TooltipDirective,
    HighlightDirective,
    EuroCurrencyPipe,
    CurrencyPipe,
    AsyncPipe,
    MatProgressSpinnerModule
  ]
})
export class ProductListComponent {
  @Input() products$: Observable<Product[]> = EMPTY;
  @Input() title = "";
  @Input() buttonText = "";
  @Input() buttonIcon = "";
  @Input() buttonColor: ThemePalette = "primary";

  @Output() buttonClick = new EventEmitter<Product>();
}
