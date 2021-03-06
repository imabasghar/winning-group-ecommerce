import { Component, Input } from '@angular/core';

@Component({
  selector: 'ecommerce-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  @Input() numberOfItemsInCart: number | null | undefined;
}
