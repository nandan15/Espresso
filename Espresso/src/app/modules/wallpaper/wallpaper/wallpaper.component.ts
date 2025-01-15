import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallpaper',
  templateUrl: './wallpaper.component.html',
  styleUrls: ['./wallpaper.component.css']
})
export class WallpaperComponent {
constructor(private router: Router) {}

  viewproject() {
    this.router.navigate(['/home/view']);
  }
}
