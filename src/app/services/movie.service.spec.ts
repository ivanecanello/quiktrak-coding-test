import { TestBed } from '@angular/core/testing';
import { MovieService } from './movie.service';

describe('MovieService', () => {
  let service: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieService],
    });
    service = TestBed.inject(MovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with mock data', () => {
    expect(service.movies().length).toBeGreaterThan(0);
  });

  it('should get movie by valid id', () => {
    const movie = service.getMovieById(1);
    expect(movie).toBeDefined();
    expect(movie?.id).toBe(1);
  });

  it('should return undefined for invalid movie id', () => {
    const movie = service.getMovieById(999);
    expect(movie).toBeUndefined();
  });
});
