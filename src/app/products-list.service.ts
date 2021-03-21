import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {

  constructor(private http: HttpClient) { }
  getProductsList() {
    return this.http.get('https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products')
  }
  getProductItem(id) {
    return this.http.get(`https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products/${id}`)
  }
}
