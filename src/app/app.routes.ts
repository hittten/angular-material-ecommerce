import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/products'
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products-page/products-page.component').then(c => c.ProductsPageComponent)
  },
  {
    path: 'shopping-cart',
    loadComponent: () => import('./pages/shopping-cart-page/shopping-cart-page.component').then(c => c.ShoppingCartPageComponent)
  },
];
