import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RicercaService {

  private finaldata = []; 
  private apiurl = "https://api.themoviedb.org"
  private apiKey="7e31c2108d08ac06d9cb31a2650abd77"
  private searchmovie = this.apiurl + "/3/search/movie?api_key=" + this.apiKey; 
   
  private searchpopular = this.apiurl + "/3/movie/popular?api_key=" + this.apiKey; 
  private detailMovie = this.apiurl +"/3/movie/";
  private genReMovie = this.apiurl +"/genre/";
  

  constructor(private http: HttpClient) { }

  getGenre(genere:string){
   
    let query = this.genReMovie +   genere  + "/movie?api_key=" + this.apiKey +"&include_adult=false&language=it-IT";    
    return this.http.get(query);
  }
  getMovies(search:string){
    let query = this.searchmovie + "&query=" + search + "&include_adult=false&language=it-IT";
    return this.http.get(query);
  }

  getPopular(){
    let query = this.searchpopular + "&include_adult=false&language=it-IT";
    return this.http.get(query);
  }

  getMovie(id:number){

    let query = this.detailMovie +  id  + "?api_key=" + this.apiKey +"&include_adult=false&language=it-IT";
    return this.http.get(query);
  }  

}
