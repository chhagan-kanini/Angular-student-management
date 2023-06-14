import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-mainh',
  templateUrl: './mainh.component.html',
  styleUrls: ['./mainh.component.css']
})
export class MainhComponent {

  public Student:any []=[];
  public Subject:any []=[];
  constructor (private _Studentservice: StudentService , private _SubjectService: SubjectService){
    
  }  

  
   getStudent1(){
    this._Studentservice.getStudent().subscribe(data => this.Student = data)
    


  }

 
  getSubject1(){
    this._SubjectService.getSubject().subscribe(data => this.Subject = data);

  }



}
