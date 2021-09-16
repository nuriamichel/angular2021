import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbButtonsModule, NgbToastModule} from "@ng-bootstrap/ng-bootstrap";
import {MatSliderModule} from "@angular/material/slider";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

import { RegisterComponent } from './components/register/register.component';
import {MatDialogModule} from "@angular/material/dialog";

const routes: Routes = [
  {path: '', component: LoginComponent}
]
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    MatProgressSpinnerModule,
    NgbToastModule,
    NgbButtonsModule,
    MatSliderModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
   
  ]
})
export class LoginModule { }
