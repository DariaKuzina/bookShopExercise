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
  private subscriptions: Subscription[] = [];
  constructor(
    private bookService: BooksService,
    private router: Router,
    private route: ActivatedRoute
  ) {  }

  ngOnInit() {

    this.update();
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.forEach(s => s.unsubscribe());
    }
  }

  create(): void {
    this.router.navigate(['./create'], { relativeTo: this.route });
  }

  delete(id: number): void {
    this.bookService.deleteBook(id)
      .subscribe(
      book => this.books = this.books.filter(b => b.id !== id),
      err => console.log(err)
      );
  }
  private update(): void {
    const sub = this.bookService.getBooks()
      .subscribe(
      books => this.books = books,
      error => console.log(error)
      );
    this.subscriptions.push(sub);
  }
}
