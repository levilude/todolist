import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    // Adicione outros componentes aqui
  ],
  imports: [
    BrowserModule,
    FormsModule // Importa o FormsModule para habilitar o ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
