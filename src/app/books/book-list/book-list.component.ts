import { Component, OnInit } from '@angular/core';
import { Book } from './../../models/book';
import { MockBooksService } from './../services/mock-books.service';
import { CartService } from './../../cart/services/cart.service';
import { CartItem } from './../../models/cartItem';

@Component({
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books : Array<Book>
  constructor(
    private bookService : MockBooksService,
    private cartService : CartService
  ) { }

  ngOnInit() {
    this.books = this.bookService.getProducts();
  }

  addToCart(book : Book) : void{
    this.cartService.add(new CartItem(book.id, book.name, 1));
  }
}
