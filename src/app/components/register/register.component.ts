import { Component, OnInit } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  loading: boolean = true;
  name: string = '';
  last_names: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  registrarUsuario(): void {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Se registro el usuario")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    
  }
}
