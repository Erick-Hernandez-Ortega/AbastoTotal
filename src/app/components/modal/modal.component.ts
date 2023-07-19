import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() contenido: string = "";
  @Input() IsError: boolean = false;
  showModal: boolean = true

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.showModal = !this.showModal
  }

}
