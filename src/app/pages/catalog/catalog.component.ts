import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent implements OnInit {
  private movieService = inject(MovieService);
  movies: Movie[] = [];

  ngOnInit(): void {
    this.movies = this.movieService.movies();
  }
}
