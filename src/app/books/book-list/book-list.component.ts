import { Component, OnInit } from '@angular/core';
import { Book } from './../../models/book';
import { MockBooksService } from './../services/mock-books.service';

@Component({
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books : Array<Book>
  constructor(
    private bookService : MockBooksService
  ) { }

  ngOnInit() {
    this.books = this.bookService.getProducts();
  }

}
