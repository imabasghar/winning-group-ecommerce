import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { IProduct } from '../product/Product';
import { ViewStatus } from '../shared/view-status';

import * as ProductListPageActions from './product-list-page.actions';

export const PRODUCT_LIST_PAGE_FEATURE_KEY = 'productListPage';

export interface IProductListPageState extends EntityState<IProduct> {
  viewStatus: ViewStatus; // has the ProductListPage list been loaded
  error?: string | null; // last known error (if any)
}

export const productListPageAdapter: EntityAdapter<IProduct> =
  createEntityAdapter<IProduct>({
    selectId: (product: IProduct) => product.sku,
  });

export const initialState: IProductListPageState = productListPageAdapter.getInitialState({
  // set initial required properties
  viewStatus: ViewStatus.Initial
});

const productListPageReducer = createReducer(
  initialState,
  on(ProductListPageActions.loadProductList, (state) => ({
    ...state,
    viewStatus: ViewStatus.Loading,
    error: null,
  })),
  on(
    ProductListPageActions.loadProductListSuccess,
    (state, { productList }) =>
      productListPageAdapter.setAll(productList, { ...state, viewStatus: ViewStatus.Success, })
  ),
  on(ProductListPageActions.loadProductListFailure, (state, { error }) => ({
    ...state,
    viewStatus: ViewStatus.Failure,
    error,
  }))
);

export function reducer(state: IProductListPageState | undefined, action: Action) {
  return productListPageReducer(state, action);
}
