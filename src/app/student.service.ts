import { Injectable } from '@angular/core';
import { IAddStudent, IStudent } from './student';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private _url ="https://localhost:7083/api/Students";

  constructor(private http:HttpClient) { }


  
/*
  getStudent():Observable<IStudent[]>{
    return this.http.get<IStudent[]>(this._url);
  }*/
  getStudent(): Observable<IStudent[]> {
    const url = `${this._url}/GetStudent`;
    return this.http.get<IStudent[]>(this._url);
  }
  

  addStu(stu: IAddStudent): Observable<IAddStudent> {
    return this.http.post<IAddStudent>(this._url, stu);
  }

  getSid(id: number): Observable<IStudent> {
    let url: string = `${this._url}/${id}`;
    return this.http.get<IStudent>(url)
  }
  deleteSid(id: number): Observable<IStudent> {
    let url: string = `${this._url}/${id}`;
    return this.http.delete<IStudent>(url)
  }
  updateSid(id: number, Student: IAddStudent): Observable<IAddStudent> {
    let url: string = `${this._url}/${id}`;
    return this.http.put<IAddStudent>(url, Student);
  }

  
}
