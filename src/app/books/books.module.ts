import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books.routing.module';

import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { MockBooksService } from './services/mock-books.service'


@NgModule({
  declarations: [
    BookListComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BooksRoutingModule
  ],
  providers: [
    MockBooksService
  ]
})
export class BooksModule {}
