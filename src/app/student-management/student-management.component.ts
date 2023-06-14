import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { IAddStudent, IStudent } from '../student';

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css']
})
export class StudentManagementComponent  {
  

  id:number=0
  uid:number=0

  uStudent: IAddStudent = {
    
    sName: '',
    sClass: '',
    sDivision: '',
    image:''
  };
  newStudent: IAddStudent = {
    
    sName: '',
    sClass: '',
    sDivision: '',
    image:''
  };
 
  public Student:any []=[];
  constructor (private _Studentservice: StudentService){
    
  }  
   getStudent1(){
    this._Studentservice.getStudent().subscribe(data => this.Student = data);

  }

  addStudent(): void {
    this._Studentservice.addStu(this.newStudent).subscribe(student => {
      alert ("Student Added")
      console.log('New student added:', student);
   
    });
  }


  deleteStudent(): void{
    this._Studentservice.deleteSid(this.id).subscribe((data)=>{
      alert ("Student Deleted")
      console.log(data)
    })
  }

  update():void{
    this._Studentservice.updateSid(this.uid,this.uStudent).subscribe((data)=>{
      alert ("Student Updated")
      console.log(data)
    })
  }
}
