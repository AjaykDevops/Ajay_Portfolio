import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import * as AOS from 'aos';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [NgFor, RouterModule, NgIf, CommonModule],
})
export class HomeComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      }
      if (event instanceof NavigationEnd) {
        this.loading = false;
      }
    });
  }

  showIntro = true;
  loading = false;

  personalInfo = {
    name: 'Ajay Krishnan',
    role: 'Software Developer',
    description: 'Passionate about building web experiences.',
    email: 'ajaykrishnan818@gmail.com',
    location: 'Chennai,India',
    github: 'github.com/ajayaji2255',
    linkedin: 'linkedin.com/in/ajay-krishnan-153766204',
    about:
      "Hi, I'm Ajay Krishnan — a creative and curious full-stack developer who enjoys building visually engaging, user-friendly interfaces and robust backend systems. I work with Angular on the frontend and .NET (C#) on the backend, along with other modern web technologies.",
  };

  projects = [
    {
      title: 'Portfolio',
      shortDescription: 'Personal portfolio website',
      description:
        'A modern and interactive developer portfolio built with Angular and SCSS, showcasing my skills, projects, and contact information in a dark-themed UI.',
      imageUrl: 'assets/portfolio_intro.jpeg',
      technologies: ['Angular', 'TypeScript', 'CSS', 'HTML'],
      link: 'https://ajaykdevops.github.io/Ajay_Portfolio', // example
    },
    {
      title: 'Cinephile',
      shortDescription: 'Movie discovery & wishlist app',
      description:
        'Cinephile is a movie explorer app built using Angular and Firebase. It integrates with the TMDB API to fetch trending movies, and allows users to manage a personalized wishlist with Google authentication.',
      imageUrl: 'assets/Cinephile.png',
      technologies: ['Angular', 'Firebase', 'TypeScript', 'SCSS'],
      link: 'https://cinephile-84d38.web.app/', // your project link
    },
  ];

  openExternalLink(link: string): void {
    window.open(link, '_blank'); // opens in new tab
  }

  ngOnInit() {
    AOS.init();
  }

  ngAfterViewInit() {
    const symbols = document.querySelectorAll('.floating-symbol');
  }

  showAboutMe: boolean = false;

  closeModal(event: MouseEvent): void {
    this.showAboutMe = false;
  }

  navigateToAboutDetail(): void {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['/about-detail']);
    }, 2000);
  }

  navigateToHome(): void {
    this.router.navigate(['/intro']);
  }
  // goHome() {
  //   this.router.navigate(['/intro']);
  // }
}
