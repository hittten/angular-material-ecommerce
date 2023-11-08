import {Component, Input} from '@angular/core';
import {Product} from "../product";
import {ThemePalette} from "@angular/material/core";
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgFor, NgOptimizedImage, NgIf} from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  imports: [NgFor, NgOptimizedImage, MatButtonModule, MatIconModule, NgIf, MatDividerModule]
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Input() title = "";
  @Input() buttonText = "";
  @Input() buttonIcon = "";
  @Input() buttonColor: ThemePalette = "primary";
}
