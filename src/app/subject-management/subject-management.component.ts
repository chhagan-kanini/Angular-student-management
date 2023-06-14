import { Component } from '@angular/core';
import { IAddSubject } from '../subject';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subject-management',
  templateUrl: './subject-management.component.html',
  styleUrls: ['./subject-management.component.css']
})
export class SubjectManagementComponent {

  
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

  addSub(): void {
    this._SubjectService.addSub(this.newSubject).subscribe(subject => {
      console.log('New subject added:', subject);
      alert ("Subject Added")
   
    });
  }


  deleteSub(): void{
    this._SubjectService.deleteSuid(this.id).subscribe((data)=>{
      console.log(data)
      alert ("Subject Delete")
    })
  }

  update():void{
    this._SubjectService.updateSuid(this.uid,this.uSubject).subscribe((data)=>{
      console.log(data)
      alert ("Subject Update")
    })
  }


}
