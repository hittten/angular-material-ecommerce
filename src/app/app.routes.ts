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
  {
    path: 'product-create',
    loadComponent: () => import('./pages/product-create-page/product-create-page.component').then(c => c.ProductCreatePageComponent)
  },
  {
    path: 'signals',
    loadComponent: () => import('./pages/signals-page/signals-page.component').then(c => c.SignalsPageComponent)
  },
];
