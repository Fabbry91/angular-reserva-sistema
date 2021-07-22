import { Component, OnInit, Input } from '@angular/core';
import { Reserva } from 'src/app/models/Reserva';
import { ReservaService } from '../../services/reserva.service'

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  @Input() reserva: Reserva;

  constructor(private ServReserva: ReservaService) { }

  ngOnInit(): void {
  }

  delete(reserva: Reserva) {
    if(confirm('¿Seguro que quieres eliminar la reseva?')){
      this.ServReserva.deleteReserva(reserva)
    }    
  }

}
