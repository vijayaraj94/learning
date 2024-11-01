import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    ShoppingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
