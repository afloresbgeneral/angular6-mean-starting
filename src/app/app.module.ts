import { EmailModule } from './email-module/email.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parques.component';
import { FormsModule } from '@angular/forms';
import { appRoutingProviders, routing } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeeperComponent } from './components/keeper/keeper.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { EditorModule } from '@tinymce/tinymce-angular';
import { SimpleTinyComponent } from './components/simple-tiny/simple-tiny.component';
import { AdminModule } from './admin-module/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    HomeComponent,
    AnimalsComponent,
    ContactComponent,
    KeeperComponent,
    SimpleTinyComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
    EditorModule,
    routing,
    EmailModule,
    AdminModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
