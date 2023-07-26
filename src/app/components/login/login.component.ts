import { Component, OnInit } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  showModal: boolean = false;
  messageModal: string = '';

  constructor() {}

  ngOnInit() {}

  signIn(): void {
    const auth = getAuth();

    if (this.email === '' || this.password === '') {
      this.messageModal = 'Usuario y/o contraseña en blanco';
      this.showModal = true;
    } else {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log('Seseion iniciada: ' + user.email);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;

          if (errorCode === 'auth/user-not-found') {
            this.messageModal = 'Correo no encontrado';
          } else if (errorCode === 'auth/wrong-password') {
            this.messageModal = 'Contraseña incorrecta';
          } else {
            this.messageModal = errorCode;
          }
          this.showModal = true;
        });
    }
  }
}
