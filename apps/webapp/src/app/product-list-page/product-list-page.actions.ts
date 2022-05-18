import { createAction, props } from '@ngrx/store';
import { IProduct } from '../product/Product';

export const loadProductList = createAction('[ProductListPage Page] Init');

export const loadProductListSuccess = createAction(
  '[ProductListPage/API] Load ProductList Success',
  props<{ productList: IProduct[] }>()
);

export const loadProductListFailure = createAction(
  '[ProductListPage/API] Load ProductList Failure',
  props<{ error: any }>()
);
