import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ProductService } from '../product/product.service';

import * as ProductListPageActions from './product-list-page.actions';

@Injectable()
export class ProductListPageEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductListPageActions.loadProductList),
      switchMap(() =>
        this.productService.getAll()
          .pipe(
            map(productList => ProductListPageActions.loadProductListSuccess({
              productList
            })),
            catchError(error => of(ProductListPageActions.loadProductListFailure({ error })))
          )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly productService: ProductService,
  ) {}
}
