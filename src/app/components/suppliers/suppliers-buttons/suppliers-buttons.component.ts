import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suppliers-buttons',
  templateUrl: './suppliers-buttons.component.html',
})
export class SuppliersButtonsComponent implements OnInit {
  clave: string = '';
  nombre: string = '';
  nombreRazon: string = '';
  rfc: string = '';
  direccion: string = '';
  titular: string = '';
  telefono: string = '';
  email: string = '';
  banco: string = '';
  nCuenta: string = '';
  clabe: string = '';
  esActivo: boolean = true;

  constructor() {}

  ngOnInit() {}

  async addSuppliers() {
    if (this.checkFields()) {
      alert('Un campo esta vacio verifique y llenelo de nuevo');
    } else {
      console.log(this.banco);
    }
  }

  checkFields(): boolean {
    if (
      this.clave === '' ||
      this.nombre === '' ||
      this.nombreRazon === '' ||
      this.rfc === '' ||
      this.direccion === '' ||
      this.titular === '' ||
      this.telefono === '' ||
      this.email === '' ||
      this.banco === '' ||
      this.nCuenta === '' ||
      this.clabe === ''
    ) {
      return true;
    } else {
      return false;
    }
  }

  checkInputs(): void {
    if (
      (this.rfc.length && this.clabe.length) === 18 &&
      this.clave.length === 3 &&
      this.nCuenta.length === 10
    ) {
      this.esActivo = false;
    } else {
      this.esActivo = true;
    }
  }
}
