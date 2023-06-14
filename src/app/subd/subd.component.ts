import { Component } from '@angular/core';
import { IAddSubject } from '../subject';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subd',
  templateUrl: './subd.component.html',
  styleUrls: ['./subd.component.css']
})
export class SubdComponent {

   
  id:number=0
  uid:number=0

  uSubject: IAddSubject = {
    
    subName: '',
    subMarks: '',
    subGrade:'',
    sid:0
  };
  newSubject: IAddSubject = {
    
    subName: '',
    subMarks: '',
    subGrade:'',
    sid:0
  };
 
  public Subject:any []=[];
  constructor (private _SubjectService: SubjectService){
    
  }  
  getSubject1(){
    this._SubjectService.getSubject().subscribe(data => this.Subject = data);

  }

 



}
