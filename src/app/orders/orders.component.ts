import { Component, OnInit, Input } from '@angular/core';
import { Order } from './../models/order';

@Component({
  selector : 'order',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  @Input() order;

  constructor(
  ) { }

  ngOnInit() {
  }

}
