import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentManagementComponent } from './student-management/student-management.component';
import { SubjectManagementComponent } from './subject-management/subject-management.component';
import {HttpClientModule} from '@angular/common/http';
import { StudentService } from './student.service';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { DispComponent } from './disp/disp.component';
import { AddsComponent } from './adds/adds.component';
import { UpsComponent } from './ups/ups.component';
import { DelsComponent } from './dels/dels.component';
import { SubjectService } from './subject.service';
import { SubdComponent } from './subd/subd.component';
import { SubaddComponent } from './subadd/subadd.component';
import { SubdelComponent } from './subdel/subdel.component';
import { SubupComponent } from './subup/subup.component';
import { MainhComponent } from './mainh/mainh.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentManagementComponent,
    SubjectManagementComponent,
    NavbarComponent,
    DispComponent,
    AddsComponent,
    UpsComponent,
    DelsComponent,
    SubdComponent,
    SubaddComponent,
    SubdelComponent,
    SubupComponent,
    MainhComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StudentService,SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
