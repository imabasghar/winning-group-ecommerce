import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IHeaderItem } from './HeaderItem';

@Component({
  selector: 'ecommerce-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() headerItemList: IHeaderItem[] = [];
  @Input() numberOfItemsInCart?: number;
  @Input() activeHeaderItemPath?: string;
  @Output() headerItemClick = new EventEmitter<string>();
}
