import { Component, OnInit } from '@angular/core';
import { Movie } from './../movie';

import { ProductsListService } from './../products-list.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  productsList: any;
  constructor(private productListService: ProductsListService) { }

  ngOnInit(): void {
    this.productListService.getProductsList().subscribe(
      (data) => {
        this.productsList = data
        console.log(this.productsList)
      }
      , error => console.log('hiiiiiiiiiiiii', error))

  }


}
