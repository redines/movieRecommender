import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  public movieDate = {};

  constructor(private MovieService: MovieServiceService) { }

  ngOnInit(): void {

    this.MovieService.getMovie().subscribe(data => console.log(data.Date));

  }

}
