import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainAdminComponent } from './components/main-admin/main-admin.component';
import { ListAdminComponent } from './components/list-admin/list-admin.component';
import { EditAdminComponent } from './components/edit-admin/edit-admin.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminGuard } from '../services/admin.guard';
import { UserService } from 'src/app/services/user.service';


@NgModule({
  declarations: [MainAdminComponent,
                 ListAdminComponent,
                 EditAdminComponent,
                 AddAdminComponent
                ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AdminRoutingModule
  ],
  exports: [
    MainAdminComponent,
    ListAdminComponent,
    EditAdminComponent,
    AddAdminComponent
  ],
  providers: [AdminGuard, UserService]
})
export class AdminModule { }
