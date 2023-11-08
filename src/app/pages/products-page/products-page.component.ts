import {Component} from '@angular/core';
import {PRODUCTS} from "../../modules/product/mock-products";
import {ProductListComponent} from '../../modules/product/product-list/product-list.component';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
  standalone: true,
  imports: [ProductListComponent]
})
export class ProductsPageComponent {
  products = PRODUCTS;
}
