import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import * as AOS from 'aos';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [NgFor, RouterModule, NgIf],
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
      title: '',
      description: '',
      technologies: ['', '', ''],
    },
  ];

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
  goHome() {
    this.router.navigate(['/intro']);
  }
}
