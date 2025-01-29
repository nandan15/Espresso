import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent {
  isFormVisible = false;

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }
}
