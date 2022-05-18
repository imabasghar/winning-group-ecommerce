import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProductWithCartStatus } from '../product/Product';

@Component({
  selector: 'ecommerce-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @Input() products?: IProductWithCartStatus[];
  @Output() addToCart = new EventEmitter<IProductWithCartStatus>();
  @Output() removeFromCart = new EventEmitter<IProductWithCartStatus>();

  trackByFn = (_index: number, product: IProductWithCartStatus) => product.sku;
}
