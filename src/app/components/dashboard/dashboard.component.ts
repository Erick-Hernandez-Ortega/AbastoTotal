import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signOut } from 'firebase/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  contenido: string = '';
  showModal: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    const auth = getAuth();
    if (auth.currentUser === null) {
      this.router.navigate(['login']);
      alert('Inicia sesion primero');
    }
  }

  signOut(): void {
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

  redirectToTheView(view: string) {
    this.router.navigate([view]);
  }
}
