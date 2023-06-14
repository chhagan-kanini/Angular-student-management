import { Component } from '@angular/core';
import { IAddSubject } from '../subject';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subdel',
  templateUrl: './subdel.component.html',
  styleUrls: ['./subdel.component.css']
})
export class SubdelComponent {

   
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
  


  deleteSub(): void{
    this._SubjectService.deleteSuid(this.id).subscribe((data)=>{
      alert ("Subject Deleted")
      console.log(data)

    })
  }


}
