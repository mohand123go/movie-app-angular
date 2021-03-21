import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '[app-movie-item]',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movieAttr;
  constructor(private router: Router) { }
  goToMovieDetials(id) {
    console.log('id', id)
    this.router.navigate(['movieDetails', id])
  }

  ngOnInit(): void {
  }

}