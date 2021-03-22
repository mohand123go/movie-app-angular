import { Component, OnInit } from '@angular/core';
import { CartCounterService } from './../cart-counter.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartCounter: number;
  constructor(private CartCounterServ: CartCounterService) { }

  ngOnInit(): void {
    this.CartCounterServ.currentCartCounter.subscribe(data => this.cartCounter = data)
  }

}
