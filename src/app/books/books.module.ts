import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books.routing.module';

import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { BooksService } from './services/books.service';
import { DetailsComponent } from './details/details.component'


@NgModule({
  declarations: [
    BookListComponent,
    BookComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BooksRoutingModule
  ],
  providers: [
    BooksService
  ]
})
export class BooksModule {}
