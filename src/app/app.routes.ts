import { Routes } from '@angular/router';

//In here I apply lazy loading, which enhance performance in case we were dealing with a big application
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/catalog/catalog.component').then((m) => m.CatalogComponent),
  },
  {
    path: 'movies/:id',
    loadComponent: () => import('./pages/detail/detail.component').then((m) => m.DetailComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
