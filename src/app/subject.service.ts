import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent, IAddStudent } from './student';
import { IAddSubject, ISubject } from './subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private _url ="https://localhost:7083/api/Subjects";

  constructor(private http:HttpClient) { }

  getSubject():Observable<ISubject[]>{
    return this.http.get<ISubject[]>(this._url);
  }

  addSub(stu: IAddSubject): Observable<IAddSubject> {
    return this.http.post<IAddSubject>(this._url, stu);
  }

  getSuid(id: number): Observable<ISubject> {
    let url: string = `${this._url}/${id}`;
    return this.http.get<ISubject>(url)
  }
  deleteSuid(id: number): Observable<ISubject> {
    let url: string = `${this._url}/${id}`;
    return this.http.delete<ISubject>(url)
  }
  updateSuid(id: number, Subject: IAddSubject): Observable<IAddSubject> {
    let url: string = `${this._url}/${id}`;
    return this.http.put<IAddSubject>(url, Subject);
  }

  
}
