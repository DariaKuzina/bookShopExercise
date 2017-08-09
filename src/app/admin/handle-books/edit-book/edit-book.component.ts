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
  private id: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BooksService
  ) { }

  ngOnInit() {

    this.book = new Book(null, null, null, null, null, null);

    this.route.params
      .switchMap((params: Params) => {
        return params['id']
          ? this.bookService.getBook(+params['id'])
          : null;
      })
      .subscribe(
      book => this.book = book,
      err => console.log(err)
      );
  }

  edit(): void {

    if (this.book.id)
      this.update();
    else
      this.create();

    this.router.navigate(['/admin/books']);
  }

  update(): void {
    this.bookService.updateBook(this.book)
      .subscribe(
      book => this.book = book,
      err => console.log(err)
      );
  }

  create(): void {
    this.bookService.createBook(this.book)
      .subscribe(
      book => this.book = book,
      err => console.log(err)
      );
  }
}
