import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-favorit-movies',
  templateUrl: './favorit-movies.component.html',
  styleUrls: ['./favorit-movies.component.css']
})
export class FavoritMoviesComponent implements OnInit {

  favoriteMoviesList;
  constructor(private store: Store<{ favoriteMoviesReducer }>) {

    this.store.select('favoriteMoviesReducer').subscribe(data => this.favoriteMoviesList = data)

  }

  ngOnInit(): void {

  }

}
