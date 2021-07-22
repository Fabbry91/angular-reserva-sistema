import { Injectable } from '@angular/core';
import { Reserva } from '../models/Reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  reservas: Reserva[];

  constructor() {

  }

  getReservas() {
    if (localStorage.getItem('reservaStorage') === null) {
      this.reservas = [];
    } else {
      let aux = localStorage.getItem('reservaStorage')
      console.log(aux);
      if (aux) {
        this.reservas = JSON.parse(aux);
      }
    }
    return this.reservas;
  }

  addReservas(reserva: Reserva) {

    this.reservas.push(reserva)
    let reservas = [];

    if (localStorage.getItem('reservaStorage') === null) {
      reservas = [];
      reservas.push(reserva);
      localStorage.setItem('reservaStorage', JSON.stringify(reservas));
    } else {
      let aux = localStorage.getItem('reservaStorage')
      if (aux) {
        reservas = JSON.parse(aux);
        reservas.push(reserva);
        localStorage.setItem('reservaStorage', JSON.stringify(reservas));
      }
    }

  }

  deleteReserva(reserva: Reserva) {
    for (let i = 0; i < this.reservas.length; i++) {
      if (reserva == this.reservas[i]) {
        this.reservas.splice(i, 1);
        localStorage.setItem('reservaStorage', JSON.stringify(this.reservas));
      }
    }
  }

  getReservaById(id: string) {
    let result = this.reservas.find((r) => r.id === id);
    return result;
  }
}
