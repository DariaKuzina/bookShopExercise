import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from './../../models/book';
import { BooksService } from './../../books/services/books.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  templateUrl: './handle-books.component.html',
  styleUrls: ['./handle-books.component.css']
})
export class HandleBooksComponent implements OnInit, OnDestroy {

  books: Array<Book>;
  editedBook: Book;
  private subscription: Subscription;
  constructor(
    private bookService: BooksService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {

    this.update();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  select(book: Book) {
    this.editedBook = book;
  }

  delete(id: number): void {
    this.bookService.deleteBook(id)
      .subscribe(
      book => this.books = this.books.filter(b => b.id !== id),
      err => console.log(err)
      );
  }

  edit(book: Book): void {

    this.bookService.updateBook(book)
      .subscribe(
      book => this.books[this.books.findIndex(x => x.id == book.id)] = book,
      err => console.log(err)
      );

   this.editedBook = new Book(null, null, null, null, null, null);
  }

  create(book: Book): void {

    this.bookService.createBook(book)
      .subscribe(
      book => this.books.push(book),
      err => console.log(err)
      );
  }

  private update(): void {

    this.editedBook = new Book(null, null, null, null, null, null);
    this.subscription = this.bookService.getBooks()
      .subscribe(
      books => this.books = books,
      error => console.log(error)
      );
  }
}
