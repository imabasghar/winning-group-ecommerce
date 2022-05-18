import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProductWithCartStatus } from '../product/Product';
import { ProductStatus } from '../product/ProductStatus';

@Component({
  selector: 'ecommerce-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product?: IProductWithCartStatus;
  @Output() addToCart = new EventEmitter<IProductWithCartStatus>();
  @Output() removeFromCart = new EventEmitter<IProductWithCartStatus>();
  ProductStatus = ProductStatus;
}
