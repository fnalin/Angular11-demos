import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDemo1Component } from './modal-demo1/modal-demo1.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  title = 'NgbModalApp';

  constructor(private modalService: NgbModal) {}

  openModal1() {
    const modalRef = this.modalService.open(ModalDemo1Component);
    modalRef.componentInstance.name = 'Nalin';
  }

  openModal2() {
    const modalRef = this.modalService.open(ModalDemo1Component);
    modalRef.componentInstance.name = 'Mitui';
  }
}
