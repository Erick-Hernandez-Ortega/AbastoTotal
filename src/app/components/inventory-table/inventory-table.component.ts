import { Component, OnInit } from '@angular/core';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { db } from 'src/main';

@Component({
  selector: 'app-inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.css'],
})
export class InventoryTableComponent implements OnInit {
  productos: any[] = [];

  constructor() {}

  ngOnInit() {
    const unsub = onSnapshot(collection(db, 'productos'), (query) => {
      this.productos = [];
      query.forEach((doc) => this.productos.push(doc.data()));
    });
  }
}
