import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/products'
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products-page/products-page.module').then(m => m.ProductsPageModule)
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import('./pages/shopping-cart-page/shopping-cart-page.module').then(m => m.ShoppingCartPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: PreloadAllModules,
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
