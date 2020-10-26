import { Component, OnInit } from '@angular/core';
import { RicercaService } from '../ricerca.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  genere;
  listaMovieGenere=[];
  constructor(private ricercaService: RicercaService, private route: ActivatedRoute) { }


  ngOnInit() {

    this.route.params.subscribe(params => {
      this.genere = params['genere'];
     
      this.ricercaService.getGenre(this.genere).subscribe((data) => {
        this.listaMovieGenere = Array.from(Object.keys(data), k => data[k]);
        //console.log(this.listMoviePopular);
      });

    });


    
    //this.ricercaService.getPopular().subscribe((data) => {
     // this.listaMovieGenere = Array.from(Object.keys(data), k => data[k]);
      //console.log(this.listMoviePopular);
    //});
    
  }

}
