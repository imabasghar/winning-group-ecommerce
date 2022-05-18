import { ProductStatus } from './ProductStatus';

export interface IProduct {
  sku: string;
  name: string;
  price: number;
  rrp: number;
  image: string;
}

export interface IProductWithCartStatus extends IProduct {
  productStatus: ProductStatus;
}
