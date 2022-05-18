import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductCardModule } from '../product-card/product-card.module';

@NgModule({
  declarations: [ProductListComponent],
  exports: [ProductListComponent],
  imports: [CommonModule, ProductCardModule],
})
export class ProductListModule {}
