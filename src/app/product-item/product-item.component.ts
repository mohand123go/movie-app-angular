import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartCounterService } from './../cart-counter.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productAttr;
  cartCounter: number;
  constructor(private router: Router, private cartCounterServ: CartCounterService) { }
  goToProductDetials(id) {


    this.router.navigate(['productDetails', id])
  }

  changeCounterVal() {
    this.cartCounterServ.changeCounterValue(this.cartCounter + 1)
  }

  ngOnInit(): void {
    this.cartCounterServ.currentCartCounter.subscribe(data => this.cartCounter = data)
  }


}

