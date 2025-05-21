import { Component, HostListener } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

declare var gsap: any; // For GSAP usage
declare var ScrollTrigger: any; // For GSAP ScrollTrigger plugin

@Component({
  selector: 'app-about-detail',
  standalone: true,
  imports: [NgFor],
  templateUrl: './about-detail.component.html',
  styleUrls: ['./about-detail.component.scss'],
})
export class AboutDetailComponent {
  constructor(private router: Router) {}
  personalInfo = {
    aboutLong: `
     A passionate Full-Stack Developer with expertise in Angular, SCSS, and .NET (C#), focused on building scalable, creative, and user-centric web solutions. Currently working as a Software Developer at Abhayaa Financial Technologies Pvt Ltd, contributing to the development and support of software solutions.
      <br><br>
     I hold a B.Tech in Electronics and Computer Engineering from SRM Institute of Science and Technology. I have hands-on experience with TypeScript, HTML, CSS/SCSS, C# and SQL,  along with a deep interest in UI/UX and product design.
      <br><br>
      Outside of tech, I enjoy art, design, and sports. I’ve also contributed to research projects like an IEEE-published IoT-based Smart Mirror and a patented AI-based Women’s Safety Wristband.
    `,
  };

  skills = [
    { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'HTML', icon: 'devicon-html5-plain colored' },
    { name: 'CSS', icon: 'devicon-css3-plain colored' },
    { name: 'SCSS', icon: 'devicon-sass-original colored' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: '.NET', icon: 'devicon-dot-net-plain colored' },
    { name: 'C#', icon: 'devicon-csharp-plain colored' },
    { name: 'SQL', icon: 'fas fa-database' },
  ];

  tools = [
    { name: 'Visual Studio 2022', icon: 'devicon-visualstudio-plain colored' },
    { name: 'Visual Studio Code', icon: 'devicon-vscode-plain colored' },
    {
      name: 'Microsoft SQL Server',
      icon: 'devicon-microsoftsqlserver-plain colored',
    },
    { name: 'Figma', icon: 'devicon-figma-plain colored' },
    { name: 'Blender', icon: 'devicon-blender-original colored' },
    { name: 'MS Office', icon: 'devicon-windows8-original colored' },
    { name: 'Canva', icon: 'devicon-canva-original colored' },
    { name: 'Lightroom', icon: 'devicon-photoshop-plain colored' },
  ];

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }

  timeline = [
    {
      title: 'Graduation',
      description:
        'Completed my B.Tech in Electronics and Computer Engineering <br><br> with a CGPA of 8.9',
    },
    {
      title: 'Internship',
      description:
        'Worked as an intern in the IT department at Airport Authority of India.',
    },
    {
      title: 'Software Developer',
      description:
        'Working as a Full Stack Developer at Abhayaa Financial Technologies Pvt. Ltd.',
    },
    {
      title: 'Portfolio',
      description: 'Built and launched this personal portfolio website.',
    },
    {
      title: 'Ciniphile',
      description:
        'Created a new web page named Ciniphile, which is used for movie finding,<br><br> wishlisting, and viewing movie-related details.',
    },
  ];
  activeIndex: number | null = null;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const timeline = document.querySelector('.timeline');
    const follower = document.querySelector('.scroll-follower');
    const timelineItems = document.querySelectorAll('.timeline-item');

    if (!timeline || !follower) return;

    // === Move the spaceship ===
    const rect = timeline.getBoundingClientRect();
    const top = window.scrollY + rect.top;
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    const relativeTop = Math.min(
      Math.max(scrollPosition - top, 0),
      timeline.clientHeight - 30
    );

    (follower as HTMLElement).style.top = `${relativeTop}px`;

    // === Activate the nearest dot ===
    const followerRect = (follower as HTMLElement).getBoundingClientRect();
    this.activeIndex = null;

    timelineItems.forEach((item, index) => {
      const dot = item.querySelector('.timeline-dot') as HTMLElement;
      if (!dot) return;

      const dotRect = dot.getBoundingClientRect();
      const distance = Math.abs(dotRect.top - followerRect.top);

      if (distance < 30) {
        this.activeIndex = index;
      }
    });
  }
  goHome() {
    this.router.navigate(['/intro']); // Make sure this matches your route config
  }
}
