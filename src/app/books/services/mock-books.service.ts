import { Injectable } from '@angular/core';
import { Book } from './../../models/book'

@Injectable()
export class MockBooksService {

  constructor() { }

  getBooks(): Array<Book> {
    return [new Book(1, "The Hobbit", "Adventures of Bilbo Baggins", 32.40, "J.R.R.Tolkien", "Fantasy"),
    new Book(2, "Martin Iden", "One of Jack London's greatest works", 25.50, "J.London", "Künstlerroman")];
  }

}
