import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogComponent } from './catalog.component';
import { MovieService } from '../../services/movie.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;
  let movieService: MovieService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogComponent, RouterTestingModule],
      providers: [MovieService],
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
    movieService = TestBed.inject(MovieService);
  });

  it('should create the catalog component', () => {
    expect(component).toBeTruthy();
  });

  it('should load movies on init', () => {
    fixture.detectChanges();
    expect(component.movies.length).toBeGreaterThan(0);
  });

  it('should display catalog title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.catalog-title')?.textContent).toContain('Featured Movies');
  });

  it('should render movie cards for each movie', () => {
    fixture.detectChanges();
    const movieCards = fixture.nativeElement.querySelectorAll('.movie-card');
    expect(movieCards.length).toBe(component.movies.length);
  });

  it('should display movie title in each card', () => {
    fixture.detectChanges();
    const firstCard = fixture.nativeElement.querySelector('.movie-card');
    const movieTitle = firstCard.querySelector('.movie-title');
    expect(movieTitle?.textContent).toContain(component.movies[0].title);
  });

  it('should have view details links', () => {
    fixture.detectChanges();
    const viewDetailsLinks = fixture.nativeElement.querySelectorAll('.view-details-btn');
    expect(viewDetailsLinks.length).toBe(component.movies.length);
  });

});
