import { Component, OnInit } from '@angular/core';
import { RicercaService } from '../ricerca.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listMoviePopular =[];
  listMovie = [];
  constructor(private ricercaService: RicercaService) { }

  ngOnInit() {
    this.ricercaService.getPopular().subscribe((data) => {
      this.listMoviePopular = Array.from(Object.keys(data), k => data[k]);
      //console.log(this.listMoviePopular);
    });
  }

  addItem(query:string){
    
   this.ricercaService.getMovies(query).subscribe((data) => {
     this.listMovie = Array.from(Object.keys(data), k => data[k]);
      //console.log(this.listMovie);
    });
  }

}
