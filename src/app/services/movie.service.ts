import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private moviesSignal = signal<Movie[]>([]);
  public movies = this.moviesSignal.asReadonly();

  getMovieById(id: number): Movie | undefined {
    return this.movies().find((movie) => movie.id === id);
  }
}
