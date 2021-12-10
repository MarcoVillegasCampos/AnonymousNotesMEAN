import { Component, OnInit } from '@angular/core';
import { NoteService } from './notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent implements OnInit {
  notes:any[] = [];
  note:any={};
    constructor(private _noteservice: NoteService) { }
  
    ngOnInit() {
      this.getAllNotes();
    }
  
    getAllNotes(){
      let observable = this._noteservice.getNotes();
      observable.subscribe( (data:any) => {
        this.notes = data['notes'];

      });
    }

    create(){
      let observable = this._noteservice.createNote(this.note);
      observable.subscribe(data => {
        
        this.getAllNotes();
      });
    }
  }