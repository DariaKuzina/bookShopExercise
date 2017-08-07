import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from './../../models/book'

@Component({
  selector : 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Book;
  @Output() onAddToCart = new EventEmitter<Book>();
  constructor() { }

  ngOnInit() {
  }

  addToCart() : void{
    this.onAddToCart.emit(this.book);
  }
}
