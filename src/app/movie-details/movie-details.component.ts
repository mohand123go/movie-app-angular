import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsListService } from './../products-list.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  activeId: number;
  productAttr: any;
  constructor(private router: ActivatedRoute, private productListService: ProductsListService) {
    this.router.params.subscribe(params => this.activeId = params['movieId'])
  }

  ngOnInit(): void {


    this.productAttr =

      this.productListService.getProductItem(this.activeId).subscribe(
        (data) => {
          this.productAttr = data

        }
        , error => console.log('hiiiiiiiiiiiii', error))

  }

}
