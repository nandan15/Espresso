import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.css']
})
export class PaintingComponent {
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
 constructor(private router: Router) {}

  viewproject() {
    this.router.navigate(['/home/view']);
  }

  viewprivacy() {
    this.router.navigate(['/privacy']);
  }
}
