import { Component, OnInit } from '@angular/core';
import { RicercaService } from '../ricerca.service';
import { SchedaFilm } from '../shared/scheda-film.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  id: number;
  detailMovie;
  constructor(private ricercaService: RicercaService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.ricercaService.getMovie(this.id).subscribe(data => this.detailMovie = data);
      
    });

  }
}
