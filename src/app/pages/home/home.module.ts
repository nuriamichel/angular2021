import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home.component';
import {SingletonService} from "../../login/services/singleton.service";
const routes: Routes = [
  {path: '', component: HomeComponent}
]


@NgModule({
  declarations: [ HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    SingletonService
  ]
})
export class HomeModule { }
