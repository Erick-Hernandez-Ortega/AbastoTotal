import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loading : boolean = true
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false
    }, 1000);
  }

}
