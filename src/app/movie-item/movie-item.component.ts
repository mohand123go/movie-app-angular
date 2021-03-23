import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FavoriteMoivesAction } from 'src/store/favoriteMovie/favoriteMoives.action';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movieAttr;
  favoriateMovies

  constructor(private router: Router, private store: Store<{ favoriteMoviesReducer }>) {
    console.log('movieAttr', this.movieAttr)
    this.store.select('favoriteMoviesReducer').subscribe(data => this.favoriateMovies = data)
    console.log(
      'this.favoriateMovies', this.favoriateMovies.moviesList)
  }
  goToMovieDetials(id) {
    console.log('id', id)
    this.router.navigate(['movieDetails', id])
  }

  ngOnInit(): void {
  }
  AddToFav() {
    this.store.dispatch(new FavoriteMoivesAction({ movieCounter: this.favoriateMovies.movieCounter, moviesList: this.movieAttr }))
  }
}