import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MOVIES } from '../constants/movies.constants';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private moviesSignal = signal<Movie[]>([]);
  public movies = this.moviesSignal.asReadonly();

  constructor() {
    this.initializeMockData();
  }

  private initializeMockData(): void {
    this.moviesSignal.set(MOVIES);
  }

  getMovieById(id: number): Movie | undefined {
    return this.movies().find((movie) => movie.id === id);
  }
}
