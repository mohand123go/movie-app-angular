import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritMoviesComponent } from './favorit-movies.component';

describe('FavoritMoviesComponent', () => {
  let component: FavoritMoviesComponent;
  let fixture: ComponentFixture<FavoritMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
