import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ValidationsDate } from '../helpers/validationsDate';

import { ReservaService } from '../../services/reserva.service'



@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css']
})
export class CrearReservaComponent implements OnInit {

  @Output() nuevaReserva = new EventEmitter<any>();

  forma: FormGroup;
  error: Boolean;

  constructor(private fb: FormBuilder, private reservaServ: ReservaService) {
    this.error = false;
  }

  ngOnInit(): void {
    this.crearForm();
  }

  get nombreNoValido() {
    return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched
  }

  get apellidoNoValido() {
    return this.forma.get('apellido')?.invalid && this.forma.get('apellido')?.touched
  }

  get fechaNoValido() {
    return this.forma.get('fecha')?.invalid && this.forma.get('fecha')?.touched
  }

  get horaNoValido() {
    return this.forma.get('hora')?.invalid && this.forma.get('hora')?.touched
  }

  crearForm() {
    this.forma = this.fb.group({
      'nombre': ['', Validators.required],
      'apellido': ['', Validators.required],
      'fecha': ['', [Validators.required, ValidationsDate.controlDate]],
      'hora': ['', [Validators.required, ValidationsDate.controlHoras]],
      'sala': ['', Validators.required],
      'hide': [true]
    })
  }

  enviarDatos() {
    if (this.forma.invalid) {
      this.error = true;
      console.log('formulario invalido')
    } else {
      const Reserva = {
        id: this.forma.value.fecha + this.forma.value.hora + this.forma.value.sala,
        nombre: this.forma.value.nombre,
        apellido: this.forma.value.apellido,
        fecha: this.forma.value.fecha,
        hora: this.forma.value.hora,
        sala: this.forma.value.sala,
        hide: this.forma.value.hide,
      };
      this.reservaServ.addReservas(Reserva);
      //console.log(Reserva)
    }
    //console.log(this.reservaServ.getReservas());
    this.forma.reset();
  }

}
