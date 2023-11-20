import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../product";
import {ThemePalette} from "@angular/material/core";
import {EMPTY, Observable} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @Input() products$: Observable<Product[]> = EMPTY;
  @Input() title = "";
  @Input() buttonText = "";
  @Input() buttonIcon = "";
  @Input() buttonColor: ThemePalette = "primary";

  @Output() buttonClick = new EventEmitter<Product>();
}
