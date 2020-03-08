import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { FooterComponent } from './footer/footer.component';
import { MovieServiceService } from './services/movie-service.service';

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
  providers: [MovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
