import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header/header.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
    constructor(private router: Router) {}
     
  viewprivacy() {
    this.router.navigate(['/privacy']);
  }
}
