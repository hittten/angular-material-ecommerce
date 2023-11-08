import {Component} from '@angular/core';
import {PRODUCTS} from "../../modules/product/mock-products";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent {
  products = PRODUCTS;
}
