import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailComponent } from './detail.component';
import { MovieService } from '../../services/movie.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MOVIES } from '../../constants/movies.constants';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let movieService: MovieService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailComponent, RouterTestingModule],
      providers: [MovieService],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    movieService = TestBed.inject(MovieService);
  });

  it('should create the detail component', () => {
    expect(component).toBeTruthy();
  });

  it('should get movie from service', () => {
    const movie = movieService.getMovieById(MOVIES[0].id);
    expect(movie).toBeDefined();
    expect(movie?.title).toBe(MOVIES[0].title);
  });

  it('should display back to catalog link', () => {
    component.movie = movieService.getMovieById(MOVIES[0].id);
    fixture.detectChanges();

    const backBtn = fixture.nativeElement.querySelector('.back-btn');
    expect(backBtn?.textContent).toContain('Back to Catalog');
    expect(backBtn?.getAttribute('routerLink')).toBe('/movies');
  });

  it('should show "not found" message when movieNotFound is true', () => {
    component.movieNotFound = true;
    component.movie = undefined;
    fixture.detectChanges();

    const notFoundDiv = fixture.nativeElement.querySelector('.not-found');
    expect(notFoundDiv).toBeTruthy();
  });

  it('should have all required properties when movie is set', () => {
    component.movie = movieService.getMovieById(MOVIES[0].id);
    expect(component.movie).toBeDefined();
    expect(component.movie?.title).toBeDefined();
    expect(component.movie?.genre).toBeDefined();
  });

  it('should have a valid movie id when selected', () => {
    const movie = movieService.getMovieById(MOVIES[0].id);
    expect(movie?.id).toBe(MOVIES[0].id);
  });
});
