import {Component, EventEmitter, input, Output} from '@angular/core';
import {Product} from "../product";
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products = input<Product[]>()
  title = input("");
  buttonText = input("");
  buttonIcon = input("");
  buttonColor = input<ThemePalette>("primary");

  @Output() buttonClick = new EventEmitter<Product>();
}
