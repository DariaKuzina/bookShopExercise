import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import './../../rxjs-extensions';

import { Book } from './../../models/book';

@Injectable()
export class BooksService {
    private booksUrl = 'http://localhost:3000/books';

    constructor(
        private http: Http
    ) { }

    getBooks(): Observable<Book[]> {
        return this.http.get(this.booksUrl)
            .map(this.handleData)
            .catch(this.handleError);
    }

    getBook(id: number): Observable<Book> {
        return this.http.get(`${this.booksUrl}/${id}`)
            .map(this.handleData)
            .catch(this.handleError);
    }

    updateBook(book: Book): Observable<Book> {

        const url = `${this.booksUrl}/${book.id}`,
            body = JSON.stringify(book),
            headers = new Headers({ 'Content-Type': 'application/json' }),
            options = new RequestOptions();

        options.headers = headers;

        return this.http.put(url, body, options)
            .map(this.handleData)
            .catch(this.handleError);
    }

    createBook(book: Book): Observable<Book> {
        const url = this.booksUrl,
            body = JSON.stringify(book),
            headers = new Headers({ 'Content-Type': 'application/json' }),
            options = new RequestOptions();

        options.headers = headers;

        return this.http.post(url, body, options)
            .map(this.handleData)
            .catch(this.handleError);
    }

    deleteBook(bookId: number): Observable<Book> {

        const url = `${this.booksUrl}/${bookId}`;

        return this.http.delete(url)
            .map(this.handleData)
            .catch(this.handleError);
    }

    private handleData(response: Response) {
        const body = response.json();
        return body || {};
    }

    private handleError(error: any) {
        const errMsg = (error.message)
            ? error.message
            : error.status
                ? `${error.status} - ${error.statusText}`
                : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
