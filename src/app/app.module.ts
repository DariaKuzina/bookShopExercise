import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { BooksModule } from './books/books.module';
import { CartModule } from './cart/cart.module';

// add this line if you don't have access to
// index.html and you want to set base tag
// import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule, appRouterComponents } from './app.routing.module';
import { AppComponent } from './app.component';

import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    appRouterComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BooksModule,
    CartModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
