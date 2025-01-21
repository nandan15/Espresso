import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curtains',
  templateUrl: './curtains.component.html',
  styleUrls: ['./curtains.component.css']
})
export class CurtainsComponent {
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
