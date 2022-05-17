import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { headerItemList } from './header/header-item-list';
import { IHeaderItem } from './header/HeaderItem';

@Component({
  selector: 'ecommerce-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  headerItemList: IHeaderItem[] = headerItemList;
  routeUrl$!: Observable<string>;
  numberOfItemsInCart$!: Observable<number>;
  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    this.routeUrl$ = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.router.url),
      )

    this.numberOfItemsInCart$ = of(5); // TODO: Read from state
  }

  navigateTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
