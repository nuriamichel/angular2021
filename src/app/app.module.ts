import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UnvaccinatedService } from './services/unvaccinated.service';
import { VaccinatedService } from './services/vaccinated.service';
import { CommonModule } from '@angular/common';

import { UnVaccinatedComponent } from './un-vaccinated/un-vaccinated.component';
import { VaccinatedComponent } from './vaccinated/vaccinated.component';

@NgModule({
  
  declarations: [AppComponent, UnVaccinatedComponent, VaccinatedComponent],
  imports: [BrowserModule, CommonModule, HttpClientModule],
  providers: [
    UnvaccinatedService,
    VaccinatedService
  ],
  bootstrap: [AppComponent]

})
export class AppModule {}