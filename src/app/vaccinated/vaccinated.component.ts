import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaccinated',
  templateUrl: './vaccinated.component.html'
})
export class VaccinatedComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
