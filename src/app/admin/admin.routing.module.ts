import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { AdminGuard } from './../guards/admin.guard'


const routes: Routes = [
    {
        path: 'admin',
        component: AdminDashboardComponent,
        canActivate: [AdminGuard],
        data: {
            title: 'Admin panel'
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
export class AdminRoutingModule { }
