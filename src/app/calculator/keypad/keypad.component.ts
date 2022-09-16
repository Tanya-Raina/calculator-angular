import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.scss']
})
export class KeypadComponent implements OnInit {

  @Output() pressedKey = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  pressKey(s: string) {
    this.pressedKey.emit(s);
  }

  getAnswer() {

  }
}
