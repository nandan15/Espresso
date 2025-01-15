import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curtains',
  templateUrl: './curtains.component.html',
  styleUrls: ['./curtains.component.css']
})
export class CurtainsComponent {
constructor(private router: Router) {}

  viewproject() {
    this.router.navigate(['/home/view']);
  }
}
