import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { ProductListPageRoutingModule } from './product-list-page-routing.module';
import { ProductListPageComponent } from './product-list-page.component';
import { ProductListModule } from '../product-list/product-list.module';
import * as fromProductListPage from './product-list-page.reducer';
import { ProductListPageEffects } from './product-list-page.effects';
@NgModule({
  declarations: [ProductListPageComponent],
  imports: [
    CommonModule,
    ProductListModule,
    ProductListPageRoutingModule,
    StoreModule.forFeature(
      fromProductListPage.PRODUCT_LIST_PAGE_FEATURE_KEY,
      fromProductListPage.reducer
    ),
    EffectsModule.forFeature([ProductListPageEffects]),
    NgxSkeletonLoaderModule,
  ],
})
export class ProductListPageModule {}
