import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterIncrease } from 'src/store/counter/counter.actions';
import { ProductsListService } from '../products-list.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {


  productsList: any;
  counterCtn: number;
  constructor(private productListService: ProductsListService, private store: Store<{ counterReducer }>) { }

  ngOnInit(): void {

    console.log(this.store.select('counterReducer').subscribe(data => this.counterCtn = data.countervalue))

    this.productListService.getProductsList().subscribe(
      (data) => {
        this.productsList = data

      }
      , error => console.log('hiiiiiiiiiiiii', error))

  }

  increaseCounter() {
    this.store.dispatch(new CounterIncrease(this.counterCtn + 1))
  }



}
