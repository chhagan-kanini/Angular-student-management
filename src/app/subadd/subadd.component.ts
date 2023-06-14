import { Component } from '@angular/core';
import { IAddSubject } from '../subject';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subadd',
  templateUrl: './subadd.component.html',
  styleUrls: ['./subadd.component.css']
})
export class SubaddComponent {

   
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
  

  addSub(): void {
    this._SubjectService.addSub(this.newSubject).subscribe(subject => {
      alert ("Subject Added")
      console.log('New student added:', subject);
   
    });
  }


  

}
