import { Component, Input,Output } from '@angular/core';
import { RicercaService } from './ricerca.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() ricerca:string;
  
  title = 'CineCity';
  
  
  movieQuery:string; 

  constructor(private ricercaService: RicercaService) { }
 

  ngOnInit() {
    
  }

}
