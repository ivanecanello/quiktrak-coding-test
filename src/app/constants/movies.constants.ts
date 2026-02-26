import { Movie } from '../models/movie.model';

export const MOVIES: Movie[] = [
  {
    id: 1,
    title: 'The Matrix Resurrections',
    releaseYear: 2021,
    genre: 'Sci-Fi',
    posterUrl: 'https://image.tmdb.org/t/p/w500/8c4a8kE7PizaGQQnditMmI1xbRp.jpg',
    synopsis:
      'Return to a world of two realities: one, everyday life; the other, what lies behind it.',
    duration: 148,
  },
  {
    id: 2,
    title: 'Dune',
    releaseYear: 2021,
    genre: 'Adventure',
    posterUrl: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
    synopsis:
      'Paul Atreides, a brilliant young man, must travel to the dangerous planet Dune to ensure the future of his family and people.',
    duration: 156,
  },
  {
    id: 3,
    title: 'Parasite',
    releaseYear: 2019,
    genre: 'Drama',
    posterUrl: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    synopsis:
      'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    duration: 132,
  },
  {
    id: 4,
    title: 'Inception',
    releaseYear: 2010,
    genre: 'Thriller',
    posterUrl: 'https://image.tmdb.org/t/p/w500/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg',
    synopsis:
      'A thief who specializes in extraction of secrets from dreams is given the inverse task of planting an idea into the mind of a C.E.O.',
    duration: 148,
  },
  {
    id: 5,
    title: 'Oppenheimer',
    releaseYear: 2023,
    genre: 'Drama',
    posterUrl: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    synopsis:
      'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.',
    duration: 180,
  },
  {
    id: 6,
    title: 'Interstellar',
    releaseYear: 2014,
    genre: 'Sci-Fi',
    posterUrl: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    synopsis:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    duration: 169,
  },
];
