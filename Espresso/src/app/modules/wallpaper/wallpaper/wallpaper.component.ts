import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallpaper',
  templateUrl: './wallpaper.component.html',
  styleUrls: ['./wallpaper.component.css']
})
export class WallpaperComponent {
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
