import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentManagementComponent } from './student-management/student-management.component';
import { DispComponent } from './disp/disp.component';
import { AddsComponent } from './adds/adds.component';
import { DelsComponent } from './dels/dels.component';
import { UpsComponent } from './ups/ups.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SubdComponent } from './subd/subd.component';
import { SubaddComponent } from './subadd/subadd.component';
import { SubdelComponent } from './subdel/subdel.component';
import { SubupComponent } from './subup/subup.component';
import { SubjectManagementComponent } from './subject-management/subject-management.component';
import { MainhComponent } from './mainh/mainh.component';


const routes: Routes = [
  {
    path:'',
    component: NavbarComponent,
    children:[
      {
        path:'display',
        component:DispComponent
      },

      {
        path:'add',
        component:AddsComponent
      },
      {
        path:'del',
        component:DelsComponent
      },
      {
        path:'ups',
        component:UpsComponent
      },
      {
        path:'home',
        component:StudentManagementComponent
      },
      {
        path:'subd',
        component:SubdComponent
      },
      {
        path:'subadd',
        component:SubaddComponent
      },
      {
        path:'subdel',
        component:SubdelComponent
      },
      {
        path:'subup',
        component:SubupComponent
      },
      {
        path:'sub',
        component:SubjectManagementComponent
      }
      ,
      {
        path:'mainh',
        component:MainhComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
