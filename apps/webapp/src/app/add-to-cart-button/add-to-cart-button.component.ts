import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ecommerce-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.scss'],
})
export class AddToCartButtonComponent {
  @Input() isInCart = false;
  @Output() addToCart = new EventEmitter<void>();
  @Output() removeFromCart = new EventEmitter<void>();
}
