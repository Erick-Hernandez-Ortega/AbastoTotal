import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { collection, addDoc } from 'firebase/firestore';
import { db } from 'src/main';

@Component({
  selector: 'app-inventory-buttons',
  templateUrl: './inventory-buttons.component.html',
})
export class InventoryButtonsComponent implements OnInit {
  nombreProducto: string = '';
  existencias: number = 0;
  costos: number = 0;
  precio: number = 0;
  margenGanancia: number = 0;
  @ViewChild('closeButton', { static: true }) miBoton!: ElementRef;

  constructor() {}

  ngOnInit() {}

  async addProduct() {
    if (!this.nombreProducto.trim().match(/^[a-zA-Z0-9ñÑ\s\-]+$/u)) {
      alert('No se permite signos de puntuacion en el nombre del producto');
    } else {
      this.margenGanancia = ((this.precio - this.costos) / this.costos) * 100;

      const docRef = await addDoc(collection(db, 'productos'), {
        nombre: this.nombreProducto,
        existencias: this.existencias,
        costo: this.costos,
        precio: this.precio,
        margen: this.margenGanancia.toFixed(2),
      });

      this.miBoton.nativeElement.click();
      this.cleanInputs();
    }
  }

  cleanInputs(): void {
    this.nombreProducto = '';
    this.existencias = 0;
    this.costos = 0;
    this.precio = 0;
  }
}
