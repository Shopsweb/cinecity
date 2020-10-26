import { Component, OnInit, Input } from '@angular/core';
import { SchedaFilm } from '../shared/scheda-film.model';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  @Input() listPopular: SchedaFilm;

  constructor() {

  }

  ngOnInit() {

  }

}
