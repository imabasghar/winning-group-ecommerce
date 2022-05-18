import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCartButtonComponent } from './add-to-cart-button.component';

@NgModule({
  declarations: [AddToCartButtonComponent],
  exports: [AddToCartButtonComponent],
  imports: [CommonModule],
})
export class AddToCartButtonModule {}
