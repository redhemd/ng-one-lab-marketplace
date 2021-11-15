import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() public isOpen;
  public product;

  constructor() { }

  ngOnInit(): void {
  }

  public openModal(selectedProduct) {
    this.product = selectedProduct;
    this.isOpen = true;
  }

  public closeModal() {
    this.isOpen = false;
  }

  public order(){
    console.log('order in modal');
  }

  getText(html) {
      let tmp = document.createElement('span');
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText;
  }
}
