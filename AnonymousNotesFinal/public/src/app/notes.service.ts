import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private _http: HttpClient) { }

  getNotes(){
    return this._http.get('/notes');
  }
  createNote(note:any){
    return this._http.post('/notes', note);
  }
  getOne(id:any){
    return this._http.get(`/notes/${id}`);
  }

  updateOne(id:any, note:any){
    return this._http.put(`/notes/${id}`, note);
  }

  deleteOne(id:any){
    return this._http.delete(`/notes/${id}`);
  }
}