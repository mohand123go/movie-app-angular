import { Component, OnInit } from '@angular/core';
import { CartCounterService } from './../cart-counter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartCounter: number;
  constructor(private cartCounterServ: CartCounterService) { }

  ngOnInit(): void {
    this.cartCounterServ.currentCartCounter.subscribe(data => this.cartCounter = data)
  }



}
