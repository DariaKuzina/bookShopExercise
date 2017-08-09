import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from './../../../models/book';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BooksService } from './../../../books/services/books.service';

@Component({
  selector: 'edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  @Input() book: Book;
  @Output() onCreate = new EventEmitter<Book>();
  @Output() onEdit = new EventEmitter<Book>();
  private id: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BooksService
  ) { }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => this.id = +params['id']);
    if (isNaN(this.id))
      return;

    this.bookService.getBook(this.id)
      .subscribe(
      book => this.book = book,
      err => console.log(err)
      );
  }

  update(): void {
    this.onEdit.emit(this.book);
  }

  create(): void {
    this.onCreate.emit(this.book);
  }
}
