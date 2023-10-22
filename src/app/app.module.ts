import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { AddPrestamistaComponent } from './components/add-prestamista/add-prestamista.component';
import { AddJefePrestamistaComponent } from './components/add-jefe-prestamista/add-jefe-prestamista.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    AddUsuarioComponent,
    AddPrestamistaComponent,
    AddJefePrestamistaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
