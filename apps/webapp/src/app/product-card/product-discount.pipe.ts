import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../product/Product';

@Pipe({
  name: 'productDiscount'
})
export class ProductDiscountPipe implements PipeTransform {
  transform({ price, rrp }: Pick<IProduct, 'price' | 'rrp'>) {
    return rrp - price;
  }
}
