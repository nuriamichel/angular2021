import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SubHomeComponent } from './sub-home/sub-home.component';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home/home1/home1.component';
import { Home2Component } from './home/home2/home2.component';

const routes:Routes =[
  {path: '', component:HomeComponent,
children:[
  {
    path: '', redirectTo: 'home1', pathMatch: 'full'
  },
  {
    path: 'home1', component: Home1Component,
  },
  {
    path: 'home2', component: Home2Component,
  }
]},
{path: 'subHome', component:SubHomeComponent}

]



@NgModule({
  declarations: [
    SubHomeComponent,
    HomeComponent,
    Home1Component,
    Home2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
