import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { IProduct } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll() {
    return this.http.get<IProduct[]>('assets/MOCK_DATA.json')
      .pipe(
        delay(5000), // TODO: Remove
      )
  }
}
