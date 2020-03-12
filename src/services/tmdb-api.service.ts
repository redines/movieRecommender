import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from '../app/models/movies';
import { Image } from '../app/models/image';

@Injectable({
  providedIn: 'root'
})
export class TmdbAPIService {

  constructor(private http: HttpClient) { 
    
  }

  private APIKEY: string = "api_key=d4a971ebfde270062c5c67f45dea2eda";
  //private APIURL = "https://api.themoviedb.org/3/";
  private test: string = "https://api.themoviedb.org/3/movie/550?" + this.APIKEY;
  private image: string = "https://image.tmdb.org/t/p/w500/pCUdYAaarKqY2AAUtV6xXYO8UGY.jpg";

  getMovies(): Observable<Movies>{
    return this.http.get<Movies>(this.test);
  }

  getImage(): Observable<Image>{
    return this.http.get<Image>(this.image);
  }

}
