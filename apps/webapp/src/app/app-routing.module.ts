import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home-page/home-page.module').then((m) => m.HomePageModule),
  },
  {
    path: 'product-list',
    loadChildren: () => import('./product-list-page/product-list-page.module').then((m) => m.ProductListPageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
