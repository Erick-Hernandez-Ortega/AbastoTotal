import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { collection, addDoc } from 'firebase/firestore';
import { db } from 'src/main';

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
  calle: string = '';
  codigoPostal: string = '';
  colonia: string = '';
  titular: string = '';
  telefono: string = '';
  email: string = '';
  banco: string = '';
  nCuenta: string = '';
  clabe: string = '';
  esActivo: boolean = true;
  @ViewChild('closeButton', { static: true }) miBoton!: ElementRef;

  constructor() {}

  ngOnInit() {}

  async addSuppliers() {
    if (this.checkFields()) {
      alert('Un campo esta vacio verifique y llenelo de nuevo');
    } else {
      this.direccion = `${this.calle.trim()}, ${this.colonia.trim()}, ${this.codigoPostal.trim()}`;
      const docRef = await addDoc(collection(db, 'proveedores'), {
        clave: this.clave.toUpperCase(),
        nombre: this.nombre.trim(),
        direccion: this.direccion,
        razon_social: this.nombreRazon.trim(),
        rfc: this.rfc,
        telefono: this.telefono,
        clabe: this.clabe,
        numero_cuenta: this.nCuenta,
        banco: this.banco,
        titular: this.titular.trim(),
        email: this.email.trim(),
      });
      this.miBoton.nativeElement.click();
      this.cleanInputs();
    }
  }

  checkFields(): boolean {
    if (
      this.clave === '' ||
      this.nombre === '' ||
      this.nombreRazon === '' ||
      this.rfc === '' ||
      this.calle === '' ||
      this.codigoPostal === '' ||
      this.colonia === '' ||
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
      this.clabe.length === 18 &&
      this.clave.length === 3 &&
      (this.nCuenta.length && this.telefono.length) === 10 &&
      this.rfc.length === 13 &&
      this.codigoPostal.length === 5
    ) {
      this.esActivo = false;
    } else {
      this.esActivo = true;
    }
  }

  cleanInputs(): void {
    this.clave = '';
    this.nombre = '';
    this.nombreRazon = '';
    this.rfc = '';
    this.direccion = '';
    this.calle = '';
    this.codigoPostal = '';
    this.colonia = '';
    this.titular = '';
    this.telefono = '';
    this.email = '';
    this.banco = '';
    this.nCuenta = '';
    this.clabe = '';
  }
}
