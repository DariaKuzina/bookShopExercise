import { Component, OnInit, Input } from '@angular/core';
import { Order } from './../../../models/order';

@Component({
  selector : 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() order;

  constructor(
  ) { }

  ngOnInit() {
  }

}