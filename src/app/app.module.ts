import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { AddPrestamistaComponent } from './components/add-prestamista/add-prestamista.component';
import { AddJefePrestamistaComponent } from './components/add-jefe-prestamista/add-jefe-prestamista.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUsuarioComponent,
    AddPrestamistaComponent,
    AddJefePrestamistaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
