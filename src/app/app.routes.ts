import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full',
  },
  {
    path: 'movies',
    loadComponent: () => import('./pages/catalog/catalog.component').then((m) => m.CatalogComponent),
  },
  {
    path: 'movies/:id',
    loadComponent: () => import('./pages/detail/detail.component').then((m) => m.DetailComponent),
  },
];
