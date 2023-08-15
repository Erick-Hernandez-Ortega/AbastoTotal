import { Component, OnInit } from '@angular/core';
import { getAuth, signOut } from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css'],
})
export class SuppliersComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  signOut() {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        alert('Se ha cerrado la sesión correctamente');

        this.router.navigate(['']);
      })
      .catch((error) => {
        alert(`Hubo un error: ${error}`);
      });
  }
}
