import { Component, OnInit } from '@angular/core';
import { Book } from './../../models/book';
import { MockBooksService } from './../services/mock-books.service';
import { CartService } from './../../cart/services/cart.service';
import { CartItem } from './../../models/cartItem';
import { Router } from '@angular/router';

@Component({
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books : Array<Book>
  constructor(
    private bookService : MockBooksService,
    private cartService : CartService,
    private router : Router
  ) { }

  ngOnInit() {
    this.books = this.bookService.getProducts();
  }

  addToCart(cartItem : CartItem) : void{
    this.cartService.add(cartItem);
    this.router.navigate(['/cart']);
  }
}
