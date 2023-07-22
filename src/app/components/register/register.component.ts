import { Component, OnInit } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  loading: boolean = true;
  showModal: boolean = false;
  name: string = '';
  last_names: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  password2: string = '';
  messageModal: string = '';
  modalError: boolean = false;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  registrarUsuario(): void {
    const auth = getAuth();

    if (
      !this.name.trim().match(/^[a-zA-ZáéíóúÁÉÍÓÚ\s']+$/) ||
      !this.last_names.trim().match(/^[a-zA-ZáéíóúÁÉÍÓÚ\s']+$/)
    ) {
      this.lauchModalError('Error en el nombre de usuario y/o apellido');
    } else if (
      !this.email
        .trim()
        .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ) {
      this.lauchModalError('Error en el correo electronico');
    } else if (!this.phone.trim().match(/^\d{10}$/)) {
      this.lauchModalError('Error en el número telefonico');
    } else if (this.password.trim() !== this.password2.trim()) {
      this.lauchModalError('Las contraseñas no coinciden');
    } else if (!this.password.trim().match(/^(?=.*[A-Z]).{8,}$/)) {
      this.lauchModalError(
        'La contraseña debe ser minimo 8 caracteres y tener una mayuscula'
      );
    } else {
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          this.messageModal = 'El usuario fue registrado con exito';
          this.modalError = false;
          this.showModal = !this.showModal;
          this.cleanInputs();
        })
        .catch((error) => {
          const errorMessage = error.message;

          this.lauchModalError(errorMessage);
        });
    }
  }

  lauchModalError(message: string): void {
    this.messageModal = message;
    this.modalError = true;
    this.showModal = true;
  }

  cleanInputs(): void {
    this.name = '';
    this.last_names = '';
    this.email = '';
    this.password = '';
    this.phone = '';
    this.password2 = '';
  }
}
