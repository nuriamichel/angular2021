import { Component, OnInit } from '@angular/core';
import { SingletonService } from '../login/services/singleton.service';

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(private singletonService: SingletonService) { }

  ngOnInit(): void {
  }

  onShowMessage():void{
    console.log(this.singletonService.getMessage());
  }

}
