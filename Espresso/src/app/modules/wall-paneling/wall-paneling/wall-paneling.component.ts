import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wall-paneling',
  templateUrl: './wall-paneling.component.html',
  styleUrls: ['./wall-paneling.component.css']
})
export class WallPanelingComponent {
constructor(private router: Router) {}
scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
  viewproject() {
    this.router.navigate(['/home/view']);
  }
  viewprivacy() {
    this.router.navigate(['/privacy']);
  }
}
