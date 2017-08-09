import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from './../../../models/book';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Output() onDelete = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<Book>();
  @Input() book: Book;
  constructor(
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
  }

  edit() : void {
   this.onEdit.emit(this.book);
  }

  delete() : void {
    this.onDelete.emit(this.book.id);
  }
}
