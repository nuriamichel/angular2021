import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular2021';
  myStatus = 'my status';

  printDataNuriaComp(event: any) {
    console.log('NURIA COMP:', event);
  }
  printData(event) {
    console.log('CHILD COMP SEND DATA: ', event);
  }
}
