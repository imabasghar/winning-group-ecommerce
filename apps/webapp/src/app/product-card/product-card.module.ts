import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { AddToCartButtonModule } from '../add-to-cart-button/add-to-cart-button.module';
import { ProductDiscountPipe } from './product-discount.pipe';

@NgModule({
  declarations: [ProductCardComponent, ProductDiscountPipe],
  exports: [ProductCardComponent],
  imports: [CommonModule, AddToCartButtonModule],
})
export class ProductCardModule {}
