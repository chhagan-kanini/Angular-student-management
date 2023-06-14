import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { IAddStudent } from '../student';

@Component({
  selector: 'app-ups',
  templateUrl: './ups.component.html',
  styleUrls: ['./ups.component.css']
})
export class UpsComponent {

  uid:number=0
  uStudent: IAddStudent = {
    
    sName: '',
    sClass: '',
    sDivision: '',
    image:''
  };

  public Student:any []=[];
  constructor (private _Studentservice: StudentService){
    
  }  

  update():void{
    this._Studentservice.updateSid(this.uid,this.uStudent).subscribe((data)=>{
      console.log(data)
      alert ("Student Update")
    })
  }

}
