import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StringCalaculatorComponent } from './string-calculator/string-calculator.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, StringCalaculatorComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule, BrowserModule ,InputsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
