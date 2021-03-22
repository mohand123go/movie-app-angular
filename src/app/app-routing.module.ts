import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterReactiveFormComponent } from './register-reactive-form/register-reactive-form.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';





const routes: Routes = [
  { path: '', component: ProductsListComponent },
  { path: 'login', component: AuthComponent },
  { path: 'movieList', component: MovieListComponent },

  { path: 'register', component: RegisterReactiveFormComponent },

  { path: 'productDetails/:productId', component: ProductDetailsComponent },

  { path: 'cart', component: CartComponent },


  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
