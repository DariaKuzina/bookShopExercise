import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserOrdersComponent } from './user-orders/user-orders.component';
import { MakeOrderComponent } from './make-order/make-order.component'
import { AuthGuard } from './../guards/auth.guard'

const routes: Routes = [
    {
        path: 'orders',
        component: UserOrdersComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Your orders'
        }
    },
    {
        path: 'makeorder',
        component: MakeOrderComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Confirm order'
        }
    }
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
