import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import './../../rxjs-extensions';

import { Order } from './../../models/order';

@Injectable()
export class OrdersService {
  private ordersUrl = 'http://localhost:3000/orders';

  constructor(
    private http: Http
  ) { }

  getAllOrders(): Promise<Order[]> {
    return this.http.get(this.ordersUrl)
      .toPromise()
      .then(response => <Order[]>response.json())
      .catch(this.handleError);
  }

  getUsersOrders(id: string): Promise<Order[]> {
    return this.http.get(`${this.ordersUrl}/?customerId=${id}`)
      .toPromise()
      .then(response => <Order[]>response.json())
      .catch(this.handleError);     
  }

  createOrder(order: Order): Promise<Order> {
    const url = this.ordersUrl,
      body = JSON.stringify(order),
      headers = new Headers({ 'Content-Type': 'application/json' }),
      options = new RequestOptions({ headers: headers });

    return this.http.post(url, body, options)
      .toPromise()
      .then(response => <Order>response.json())
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

