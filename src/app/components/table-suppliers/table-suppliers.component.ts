import { Component, OnInit } from '@angular/core';
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
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
      console.log(this.suppliers);
    });
  }
}
