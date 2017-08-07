import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart.routing.module';
import { CartComponent } from './cart.component'

import { CartService } from './services/cart.service'


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CartRoutingModule
  ],
  providers: [
    CartService
  ]
})
export class CartModule {}
