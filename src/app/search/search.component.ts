import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  ricerca: string;

  @Output() newItemEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  addNewItem(value: string) {
    if(!value){
      alert("Inserire il nome di un film!")
      return
    }
    this.newItemEvent.emit(value);
  }

}
