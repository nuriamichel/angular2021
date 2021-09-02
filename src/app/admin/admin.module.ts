import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { Admin1Component } from './admin/admin1/admin1.component';
import { Admin2Component } from './admin/admin2/admin2.component';
import { SubAdminComponent } from './sub-admin/sub-admin.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =[
  {path: '', component: AdminComponent,
  children: [
    {
      path: '', redirectTo: 'admin1', pathMatch: 'full'
    },
    {
      path: 'admin1', component: Admin1Component,
    },
    {
      path: 'admin2', component: Admin2Component,
    }
  ]},

  {path: 'subAdmin', component: SubAdminComponent}
]



@NgModule({
  declarations: [
    AdminComponent,
    Admin1Component,
    Admin2Component,
    SubAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
