import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((m) => m.Home),
    title: 'Purrfect World — Home',
  },
  {
    path: 'gallery',
    loadComponent: () => import('./gallery/gallery').then((m) => m.Gallery),
    title: 'Purrfect World — Gallery',
  },
  {
    path: 'breeds',
    loadComponent: () => import('./breeds/breeds').then((m) => m.Breeds),
    title: 'Purrfect World — Breeds',
  },
  { path: '**', redirectTo: '' },
];
