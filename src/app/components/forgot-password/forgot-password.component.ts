import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  tiempo: boolean = true;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.tiempo = false;
    }, 1000);
  }
}
