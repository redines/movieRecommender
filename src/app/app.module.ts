import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { FooterComponent } from './footer/footer.component';
import { TmdbAPIService } from '../services/tmdb-api.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [TmdbAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
