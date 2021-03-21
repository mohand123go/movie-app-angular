import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsListService } from '../products-list.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  activeId: number;
  productAttr: any;
  constructor(private router: ActivatedRoute, private productListService: ProductsListService) {
    this.router.params.subscribe(params => this.activeId = params['productId'])
  }

  ngOnInit(): void {

    console.log('this.activeId', this.activeId)
    this.productAttr =

      this.productListService.getProductItem(this.activeId).subscribe(

        (data) => {

          this.productAttr = data

        }
        , error => console.log('hiiiiiiiiiiiii', error))

  }

}

