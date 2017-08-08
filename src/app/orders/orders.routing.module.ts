import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserOrdersComponent } from './user-orders/user-orders.component';
import { MakeOrderComponent } from './make-order/make-order.component'

const routes: Routes = [
    {
        path: 'orders/:id',
        component: UserOrdersComponent,
        data: {
            title: 'Your orders'
        }
    },
    {
        path: 'makeorder',
        component: MakeOrderComponent,
        data: {
            title: 'Confirm order'
        }
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class OrdersRoutingModule { }
