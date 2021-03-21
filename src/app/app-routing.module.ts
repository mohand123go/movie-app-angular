import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterReactiveFormComponent } from './register-reactive-form/register-reactive-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';





const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'login', component: AuthComponent },

  { path: 'register', component: RegisterReactiveFormComponent }

  ,
  { path: 'movieDetails/:movieId', component: MovieDetailsComponent },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
