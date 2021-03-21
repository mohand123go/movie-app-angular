import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productAttr;
  constructor(private router: Router) { }
  goToProductDetials(id) {
    console.log('iddddddddd', id)

    this.router.navigate(['productDetails', id])
  }

  ngOnInit(): void {
    console.log('productDetails', this.productAttr)
  }

}

