import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainAdminComponent } from 'src/app/admin-module/components/main-admin/main-admin.component';
import { EditAdminComponent } from './components/edit-admin/edit-admin.component';
import { ListAdminComponent } from './components/list-admin/list-admin.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AdminGuard } from 'src/app/services/admin.guard';

const adminRoutes: Routes = [
    {
        path: 'admin-panel',
        component: MainAdminComponent,
        canActivate: [AdminGuard],
        children: [
            {path: '', redirectTo: 'list', pathMatch: 'full'},
            {path: 'edit', component: EditAdminComponent},
            {path: 'list', component: ListAdminComponent},
            {path: 'add', component: AddAdminComponent},
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AdminRoutingModule {}
