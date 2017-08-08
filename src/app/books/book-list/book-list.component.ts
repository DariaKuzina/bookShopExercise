import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from './../../models/book';
import { BooksService } from './../services/books.service';
import { CartService } from './../../cart/services/cart.service';
import { CartItem } from './../../models/cartItem';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {

  books: Array<Book>;
  private subscriptions: Subscription[] = [];
  constructor(
    private bookService: BooksService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {

    const sub = this.bookService.getBooks()
      .subscribe(
      books => this.books = books,
      error => console.log(error)
      );
    this.subscriptions.push(sub);
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.forEach(s => s.unsubscribe());
    }
  }

  addToCart(cartItem: CartItem): void {
    this.cartService.add(cartItem);
    this.router.navigate(['/cart']);
  }
}
