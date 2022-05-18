import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  PRODUCT_LIST_PAGE_FEATURE_KEY,
  IProductListPageState,
  productListPageAdapter,
} from './product-list-page.reducer';

export const selectProductListPageState = createFeatureSelector<IProductListPageState>(
  PRODUCT_LIST_PAGE_FEATURE_KEY
);

const { selectAll } = productListPageAdapter.getSelectors();

export const selectProductListPageViewStatus = createSelector(
  selectProductListPageState,
  (state: IProductListPageState) => state.viewStatus
);

export const selectProductListPageError = createSelector(
  selectProductListPageState,
  (state: IProductListPageState) => state.error
);

export const selectProductList = createSelector(
  selectProductListPageState,
  (state: IProductListPageState) => selectAll(state)
);
