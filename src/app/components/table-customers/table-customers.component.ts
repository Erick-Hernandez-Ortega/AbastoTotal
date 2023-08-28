import { Component, OnInit } from '@angular/core';
import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from 'src/main';

@Component({
  selector: 'app-table-customers',
  templateUrl: './table-customers.component.html',
  styleUrls: ['./table-customers.component.css'],
})
export class TableCustomersComponent implements OnInit {
  limit : number = 5;
  customers : any[] = []

  constructor() {}

  ngOnInit() {
    this.loadDataCustomers();
  }

  async loadDataCustomers() {
    const q = query(
      collection(db, 'clientes'),
      orderBy('clave'),
      limit(this.limit)
    );

    const unsub = onSnapshot(q, (querySnapshot) => {
      this.customers = [];
      querySnapshot.forEach((doc) => {
        this.customers.push({ id: doc.id, ...doc.data() });
      }); 
    });
  }
}
