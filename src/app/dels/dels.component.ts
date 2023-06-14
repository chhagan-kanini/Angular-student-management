import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-dels',
  templateUrl: './dels.component.html',
  styleUrls: ['./dels.component.css']
})
export class DelsComponent {

id:number=0
public Student:any []=[];
constructor (private _Studentservice: StudentService){
  
}  



deleteStudent(): void{
  this._Studentservice.deleteSid(this.id).subscribe((data)=>{
    alert ("Student Deleted")
    console.log(data)
  })
}

}
