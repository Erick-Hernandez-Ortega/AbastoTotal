import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-buttons',
  templateUrl: './customers-buttons.component.html',
})
export class CustomersButtonsComponent implements OnInit {
  clave: string = '';
  nombre: string = '';
  email: string = '';
  telefono: string = '';
  direccion: string = '';
  isPagoEfectivo: boolean = true;
  banco: string = '';
  nCuenta: string = '';
  clabe: string = '';
  isActivo: boolean = true;

  constructor() {}

  ngOnInit() {}

  addCustomer(): void {}

  cleanInputs(): void {
    this.clabe = '';
    this.nombre = '';
    this.email = '';
    this.telefono = '';
    this.direccion = '';
    this.banco = '';
    this.nCuenta = '';
  }

  checkInputs(): void {
    if (this.isPagoEfectivo) {
      if (this.clave.length === 3) {
        this.isActivo = false;
      } else {
        this.isActivo = true;
      }
    } else {
      if (
        this.clave.length === 3 &&
        this.clabe.length === 18 &&
        this.nCuenta.length === 10
      ) {
        this.isActivo = false;
      } else {
        this.isActivo = true;
      }
    }
  }
}
