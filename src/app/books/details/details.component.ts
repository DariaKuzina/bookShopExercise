import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Book } from './../../models/book';
import { BooksService } from './../services/books.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  book: Book;
  bookId: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BooksService,
    private location: Location
  ) { }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => this.bookId = +params['id']);
    if (isNaN(this.bookId))
      return;

    this.bookService.getBook(this.bookId)
      .subscribe(
      book => this.book = book,
      err => console.log(err)
      );
  }

  goBack(): void {
    this.location.back();
  }
}
