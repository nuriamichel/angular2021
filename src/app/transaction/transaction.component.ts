import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "transaction",
  template: `
  <div [style.background]="mineType==='PoW' ? 'yellow' : 'green'"
       style="float: left; margin: 10px; padding: 10px;">

	  <p>Date: {{date | date:'M/d/yy'}}</p>
	  <p>From: {{from}}</p>
	  <p>To: {{to}}</p>
    <p>Quantity: {{quantity}}</p>
    <p>MoneyType: {{moneyType | uppercase}}</p>
	  <p>MineType: {{mineType }}</p>
	  <p>Miner: {{miner}}</p>
    <button (click)="onMine()">
      Mine
    </button>

  </div>
  `

})
export class TransactionComponent {

  @Input() date: string;
  @Input() from: string;
  @Input() to: string;
  @Input() quantity: number;
  @Input() moneyType: string;
  @Input() mineType: string;
  @Input() miner: number;
  @Output() mine = new EventEmitter();

  constructor() {}
  onMine() {
    this.mine.emit();
  }
  

}