import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { LugarModule } from '../lugar/lugar.module';
import { Votacion1Component } from './votacion1/votacion1.component';
import { Votacion2Component } from './votacion2/votacion2.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LugarModule
  ],
  declarations: [
    Votacion1Component,
    Votacion2Component
  ]
})
export class VotacionModule { }