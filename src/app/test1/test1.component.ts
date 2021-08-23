import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'nuria-comp',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component {
  name: string = "";
  lastName: string = "";
  people:Array<any> = [];
  @Input('status') statusTest: string = 'working';
  @Output('onSendData') sendData = new EventEmitter(null);

  constructor() {}
  onClickTest(event: any) {
    console.log('EVENT CLICK:', event);

    this.sendData.emit({
      name: 'nuria',
      status: 'busy'
    });
  }

  addPerson(event:any) {
    this.people.push({
      name: this.name,
      lastName: this.lastName
    });
  }
}
