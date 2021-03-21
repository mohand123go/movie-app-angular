import { Component, OnInit } from '@angular/core';
import { ProductsListService } from '../products-list.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {


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
