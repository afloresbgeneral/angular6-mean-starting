import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveEmailComponent } from './components/save-email/save-email.component';
import { ShowEmailComponent } from './components/show-email/show-email.component';
import { MainEmailComponent } from './components/main-email/main-email.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SaveEmailComponent, ShowEmailComponent, MainEmailComponent],
  imports: [
    FormsModule,
    CommonModule
  ], exports: [MainEmailComponent]
})
export class EmailModule { }
