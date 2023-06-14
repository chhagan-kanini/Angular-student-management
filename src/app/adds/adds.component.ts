import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { IAddStudent, IStudent } from '../student';

@Component({
  selector: 'app-adds',
  templateUrl: './adds.component.html',
  styleUrls: ['./adds.component.css']
})
export class AddsComponent {
  newStudent: IAddStudent = {
    
    sName: '',
    sClass: '',
    sDivision: '',
    image:''
  };

  
  public Student:any []=[];
  constructor (private _Studentservice: StudentService){}
    

  addStudent(): void {
    this._Studentservice.addStu(this.newStudent).subscribe(student => {

      alert ("Student Added")
      console.log('New student added:', student);
   
    });
  }

}
