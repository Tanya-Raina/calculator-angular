import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  subText = '';
  mainText = '';

  constructor() { }

  ngOnInit(): void {
  }

  pressKey(key: string) {
    if(key === 'AC') {
      this.allClear();
    } else {
      this.mainText += key;
    }
  }

  private allClear() {
    this.mainText = '';
    this.subText = '';
  }
}
