import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent implements OnInit {
  private movieService = inject(MovieService);
  private route = inject(ActivatedRoute);

  movie: Movie | undefined;
  movieNotFound = false;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = parseInt(params['id'], 10);
      this.movie = this.movieService.getMovieById(id);
      this.movieNotFound = !this.movie;
    });
  }
}
