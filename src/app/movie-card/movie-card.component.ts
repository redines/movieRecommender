import { Component, OnInit } from '@angular/core';
import { TmdbAPIService } from '../../services/tmdb-api.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  public image: string = "https://image.tmdb.org/t/p/w500/pCUdYAaarKqY2AAUtV6xXYO8UGY.jpg";
  public title: string;

  constructor(private MovieService: TmdbAPIService) { }

  ngOnInit(): void {

    this.MovieService.getMovies().subscribe(data => console.log(data.budget));
    this.MovieService.getMovies().subscribe(data => this.title = data.title);
    this.MovieService.getMovies().subscribe(data => console.log(data.release_date));
    this.MovieService.getImage().subscribe(data => this.image = data.image);

  }

}
