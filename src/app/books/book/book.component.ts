import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from './../../models/book';
import { CartItem } from './../../models/cartItem';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Book;
  @Output() onAddToCart = new EventEmitter<CartItem>();
  constructor() { }

  ngOnInit() {
  }

  addToCart(quantity: string): void {
    if (+quantity != parseInt(quantity) || +quantity <=0 ){
      alert('Enter integer positive number!');
      return;
    }
    this.onAddToCart.emit(new CartItem(this.book.id, this.book.name, +quantity));
  }
}
