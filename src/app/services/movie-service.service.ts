import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from '../models/movies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  private url: string = "../assets/testData/testMovie.json";

  constructor(
      private http: HttpClient
    ) {}

  
  getMovie():Observable<Movies> {
    return this.http.get<Movies>(this.url);
  };

}
