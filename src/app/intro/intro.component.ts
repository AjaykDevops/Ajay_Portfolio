import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class IntroComponent {
  showLoader = false;
  textAndBtnHidden = false;

  constructor(private router: Router) {}

  playTransition() {
    this.textAndBtnHidden = true;
    setTimeout(() => {
      this.showLoader = true;
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 1500);
    }, 700);
  }
}
