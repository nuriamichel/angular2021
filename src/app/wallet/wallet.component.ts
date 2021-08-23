import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "wallet",
  template: `
  <div [style.background]="(eth+btc)>10 ? '#804000' : 'gray'"
       style="float: left; margin: 10px; padding: 10px;">

	  <p>Wallet: {{wallet}}</p>
	  <p>Name: {{name}}</p>
	  <p>ETH: {{eth}}</p>
    <p>BTC: {{btc}}</p>

  </div>
  `
})
export class WalletComponent  {

  constructor() { }

  @Input() wallet: string;
  @Input() name: string;
  @Input() eth: number;
  @Input() btc: number;
}