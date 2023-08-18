import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import { db } from 'src/main';

@Component({
  selector: 'app-table-suppliers',
  templateUrl: './table-suppliers.component.html',
  styleUrls: ['./table-suppliers.component.css'],
})
export class TableSuppliersComponent implements OnInit {
  suppliers: any[] = [];
  limit: number = 10;
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
  esActivo: boolean = false;
  idActualizar: string = '';
  idBorrar: string = '';
  @ViewChild('closeButton', { static: true }) closeButton!: ElementRef;

  constructor() {}

  ngOnInit() {
    this.loadDataSuppliers();
  }

  async loadDataSuppliers() {
    const q = query(
      collection(db, 'proveedores'),
      orderBy('nombre'),
      limit(this.limit)
    );

    const unsub = onSnapshot(q, (querySnapshot) => {
      this.suppliers = [];
      querySnapshot.forEach((doc) => {
        this.suppliers.push({ id: doc.id, ...doc.data() });
      });
    });
  }

  checkInputs(): void {
    if (
      this.clabe.length === 18 &&
      this.clave.length === 3 &&
      (this.nCuenta.length && this.telefono.length) === 10 &&
      this.rfc.length === 13
    ) {
      this.esActivo = false;
    } else {
      this.esActivo = true;
    }
  }

  async showSuppliers(id: string) {
    try {
      this.idActualizar = id;
      const docRef = doc(db, 'proveedores', id);
      const docSnap = await getDoc(docRef);

      const proveedor = docSnap.data();
      this.nombre = proveedor!['nombre'];
      this.clave = proveedor!['clave'];
      this.nombreRazon = proveedor!['razon_social'];
      this.rfc = proveedor!['rfc'];
      this.direccion = proveedor!['direccion'];
      this.titular = proveedor!['titular'];
      this.telefono = proveedor!['telefono'];
      this.email = proveedor!['email'];
      this.banco = proveedor!['banco'];
      this.nCuenta = proveedor!['numero_cuenta'];
      this.clabe = proveedor!['clabe'];
    } catch (error) {
      alert(`Ocurrio un error: ${error}`);
    }
  }

  async updateSuppliers() {
    try {
      const docRef = doc(db, 'proveedores', this.idActualizar);

      await updateDoc(docRef, {
        nombre: this.nombre.trim(),
        clave: this.clave.toUpperCase(),
        razon_social: this.nombreRazon.trim(),
        rfc: this.rfc.toUpperCase(),
        direccion: this.direccion,
        titular: this.titular.trim(),
        telefono: this.telefono,
        email: this.email.trim(),
        banco: this.banco,
        numero_cuenta: this.nCuenta,
        clabe: this.clabe,
      });
      this.closeButton.nativeElement.click();
    } catch (error) {
      alert(`Ocurrio un error: ${error}`);
    }
  }

  selectIdToDelete(id: string): void {
    this.idBorrar = id;
  }

  async deleteSuppliers() {
    try {
      const docRef = doc(db, 'proveedores', this.idBorrar);

      await deleteDoc(docRef);
      this.idBorrar = '';
    } catch (error) {
      alert(`Ocurrio un error: ${error}`);
    }
  }

  showMoreProductos(event: Event) {
    const valorSeleccionado = (event.target as HTMLSelectElement).value;

    this.limit = parseInt(valorSeleccionado);
    this.loadDataSuppliers();
  }
}
