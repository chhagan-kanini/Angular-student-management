import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-disp',
  templateUrl: './disp.component.html',
  styleUrls: ['./disp.component.css']
})
export class DispComponent {

  public Student:any []=[];
  constructor (private _Studentservice: StudentService){
    
  }  
   getStudent1(){
    this._Studentservice.getStudent().subscribe(data => this.Student = data);

  }

}
