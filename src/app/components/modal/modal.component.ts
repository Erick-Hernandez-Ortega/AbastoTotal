import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() contenido: string = '';
  @Input() IsError: boolean = false;
  @Input() showModal: boolean = false;
  // Se pone para hacer el two way binding
  @Output() showModalChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor() {}

  ngOnInit() {}

  closeModal() {
    this.showModal = false;
    this.showModalChange.emit(this.showModal);
  }
}
