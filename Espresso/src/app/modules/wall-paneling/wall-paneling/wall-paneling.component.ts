import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wall-paneling',
  templateUrl: './wall-paneling.component.html',
  styleUrls: ['./wall-paneling.component.css']
})
export class WallPanelingComponent {
constructor(private router: Router) {}

  viewproject() {
    this.router.navigate(['/home/view']);
  }
}
