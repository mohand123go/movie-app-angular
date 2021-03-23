import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get('https://fake-movie-database-api.herokuapp.com/api?s=batman')
  }

}
