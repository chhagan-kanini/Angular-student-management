import { Component } from '@angular/core';
import { IAddSubject } from '../subject';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subup',
  templateUrl: './subup.component.html',
  styleUrls: ['./subup.component.css']
})
export class SubupComponent {

   
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
 

  update():void{
    this._SubjectService.updateSuid(this.uid,this.uSubject).subscribe((data)=>{
      alert ("Subject Update")
      console.log(data)
      
    })
  }


}
