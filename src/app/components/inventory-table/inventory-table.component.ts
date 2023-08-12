import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  collection,
  deleteDoc,
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
  idBorrar: string = '';
  nombreProductoActualizar: string = '';
  existenciasProductoActualizar: number = 0;
  costoProductoActualizar: number = 0;
  precioProductoActualizar: number = 0;
  @ViewChild('closeButton', { static: true }) closeButton!: ElementRef;
  @ViewChild('deleteButton', { static: true }) closeDeleteButton!: ElementRef;

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
    try {
      this.idActualizar = id;
      const docRef = doc(db, 'productos', id);
      const docSnap = await getDoc(docRef);

      const producto = docSnap.data();
      this.nombreProductoActualizar = producto!['nombre'];
      this.existenciasProductoActualizar = producto!['existencias'];
      this.costoProductoActualizar = producto!['costo'];
      this.precioProductoActualizar = producto!['precio'];
    } catch (error) {
      alert(`Ocurrio un error: ${error}`);
    }
  }

  async updateProduct() {
    try {
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
    } catch (error) {
      alert(`Ocurrio un error: ${error}`);
    }
  }

  selectProductToDelete(id: string): void {
    this.idBorrar = id;
  }

  async deleteProduct() {
    try {
      const docRef = doc(db, 'productos', this.idBorrar);

      await deleteDoc(docRef);
      this.idBorrar = '';
      this.closeDeleteButton.nativeElement.click();
    } catch (error) {
      alert(`Ocurrio un error: ${error}`);
    }
  }
}
