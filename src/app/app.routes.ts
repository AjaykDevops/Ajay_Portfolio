import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutDetailComponent } from './pages/about-detail/about-detail.component';
import { IntroComponent } from './intro/intro.component';

export const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'intro', component: IntroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about-detail', component: AboutDetailComponent },
  { path: '**', redirectTo: 'home' },
];
