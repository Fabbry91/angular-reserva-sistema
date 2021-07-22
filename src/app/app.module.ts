import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListReservaComponent } from './component/list-reserva/list-reserva.component';
import { CrearReservaComponent } from './component/crear-reserva/crear-reserva.component';

import {ReservaService} from './services/reserva.service';
import { ReservaComponent } from './component/reserva/reserva.component'

@NgModule({
  declarations: [
    AppComponent,
    ListReservaComponent,
    CrearReservaComponent,
    ReservaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ReservaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
