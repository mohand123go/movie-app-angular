import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StockAvailabilityPipe } from './stock-availability.pipe';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterReactiveFormComponent } from './register-reactive-form/register-reactive-form.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { HttpClientModule } from '@angular/common/http';
import { SeeMorePipe } from './see-more.pipe';

import { NameLimitPipe } from './name-limit.pipe'


import { ProductItemComponent } from './product-item/product-item.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieItemComponent,
    NavbarComponent,
    StockAvailabilityPipe,
    AuthComponent,
    RegisterReactiveFormComponent,
    NotFoundComponent,
    SeeMorePipe,

    ProductItemComponent,
    ProductsListComponent
    ,
    NameLimitPipe,
    ProductDetailsComponent,
    CartComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
