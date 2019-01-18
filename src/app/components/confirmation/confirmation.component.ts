import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.less']
})
export class ConfirmationComponent implements OnInit {

  @Input() content: any;
  @Output() confirmation: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  confirm(result: boolean){
      this.confirmation.next(result);
  }
}
