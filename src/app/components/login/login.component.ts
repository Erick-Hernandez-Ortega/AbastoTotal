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

  constructor() {}

  ngOnInit() {}

  signIn(): void {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('Seseion iniciada: ' + user.email);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
}
