import { Component, Input, OnInit } from '@angular/core';
import { Reserva } from 'src/app/models/Reserva';
import { ReservaService } from '../../services/reserva.service'

@Component({
  selector: 'app-list-reserva',
  templateUrl: './list-reserva.component.html',
  styleUrls: ['./list-reserva.component.css']
})
export class ListReservaComponent implements OnInit {

  reservasArr: Reserva[];

  constructor(private reservaServ: ReservaService) { }

  ngOnInit(): void {
    this.reservasArr = this.reservaServ.getReservas();
    //console.log(this.reservasArr)
  }



}
