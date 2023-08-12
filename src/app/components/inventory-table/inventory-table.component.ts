import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore';
import { db } from 'src/main';

@Component({
  selector: 'app-inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.css'],
})
export class InventoryTableComponent implements OnInit {
  productos: any[] = [];
  idActualizar: string = '';
  nombreProductoActualizar: string = '';
  existenciasProductoActualizar: number = 0;
  costoProductoActualizar: number = 0;
  precioProductoActualizar: number = 0;
  @ViewChild('closeButton', { static: true }) closeButton!: ElementRef;

  constructor() {}

  ngOnInit() {
    const unsub = onSnapshot(collection(db, 'productos'), (query) => {
      this.productos = [];
      query.forEach((doc) => {
        this.productos.push({ id: doc.id, ...doc.data() });
      });
    });
  }

  async showProduct(id: string) {
    this.idActualizar = id;
    const docRef = doc(db, 'productos', id);
    const docSnap = await getDoc(docRef);

    const producto = docSnap.data();
    this.nombreProductoActualizar = producto!['nombre'];
    this.existenciasProductoActualizar = producto!['existencias'];
    this.costoProductoActualizar = producto!['costo'];
    this.precioProductoActualizar = producto!['precio'];
  }

  async updateProduct() {
    const docRef = doc(db, 'productos', this.idActualizar);
    const margen =
      ((this.precioProductoActualizar - this.costoProductoActualizar) /
        this.costoProductoActualizar) *
      100;

    await updateDoc(docRef, {
      nombre: this.nombreProductoActualizar,
      costo: this.costoProductoActualizar,
      existencias: this.existenciasProductoActualizar,
      precio: this.precioProductoActualizar,
      margen: margen.toFixed(2),
    });
    this.closeButton.nativeElement.click();
    alert('Se ha actualizado con exito!');
  }

  deleteProduct(id: string): void {
    console.log(id);
  }
}
