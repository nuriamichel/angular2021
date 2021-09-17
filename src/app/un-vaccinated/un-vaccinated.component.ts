import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-un-vaccinated',
  templateUrl: './un-vaccinated.component.html'
})
export class UnVaccinatedComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
