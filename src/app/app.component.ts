import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reserva';
  reservaArray: any[] = [];

  agregarReserva(reserva: any) {
    this.reservaArray.push(reserva);
    const pruebaArray = this.reservaArray.find(r => r.fecha === reserva.fecha && r.hora === reserva.hora);
    if (pruebaArray.length >= 0) { console.log("ya existe", pruebaArray); }
    console.log(this.reservaArray);
  }
}
