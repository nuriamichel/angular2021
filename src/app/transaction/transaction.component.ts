import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "transaction",
  template: `
  <div [style.background]="eth+btn>10 ? '#804000' : 'gray'"
       style="float: left; margin: 10px; padding: 10px;">

	  <p>Wallet: {{wallet}}</p>
	  <p>Name: {{name}}</p>
	  <p>ETH: {{eth}}</p>
    <p>BTC: {{btc}}</p>

  </div>
  `

})
export class TransactionComponent {

  @Input() wallet: string;
  @Input() name: string;
  @Input() eth: number;
  @Input() btc: number;


  constructor() {}

  

}