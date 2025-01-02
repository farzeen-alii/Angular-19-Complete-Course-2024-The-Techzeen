import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' }, // Default Route
  { path: 'home', component: HomeComponent },           // Home Route
  { path: 'about', component: AboutComponent },
];
