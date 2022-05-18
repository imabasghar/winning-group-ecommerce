import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { IProductWithCartStatus } from '../product/Product';
import { ProductService } from '../product/product.service';
import { ProductStatus } from '../product/ProductStatus';
import { IProductListPageState } from './product-list-page.reducer';
import { selectProductList, selectProductListPageViewStatus } from './product-list-page.selectors';
import { loadProductList } from './product-list-page.actions';
import { viewStatusToStreams } from '../shared/view-status-to-streams';

@Component({
  selector: 'ecommerce-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss'],
})
export class ProductListPageComponent implements OnInit {
  productList$!: Observable<IProductWithCartStatus[]>;
  isLoading?: boolean;
  skeletonTheme = {
    'border-radius': '5px',
    height: '450px',
    // 'background-color': '#992929',
    border: '1px solid white'
  }
  constructor(
    private productListPageStore: Store<IProductListPageState>,
  ) {}

  ngOnInit(): void {
    this.productList$ = combineLatest([
        this.productListPageStore.select(selectProductList),
        of([]), // TODO: Replace with cart sku list
    ]).pipe(
      map(([productList]) =>
        productList
          .map(product => ({
            ...product,
            productStatus: ProductStatus.AvailableForCart,
          }))
      )
    );

    this.loadProductList();
  }

  private loadProductList() {
    this.handleViewStatus();
    this.productListPageStore.dispatch(loadProductList());
  }

  private handleViewStatus() {
    const { loading$, loadingComplete$ } =
      viewStatusToStreams(
        this.productListPageStore.select(selectProductListPageViewStatus)
      )
    loading$
      .subscribe(() => {
        this.isLoading = true;
      })
    loadingComplete$
      .subscribe(() => {
        this.isLoading = false;
      })
  }

}
