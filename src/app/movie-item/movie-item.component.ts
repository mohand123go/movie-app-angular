import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-movie-item]',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movieAttr;
  constructor() { }

  ngOnInit(): void {
  }

}
