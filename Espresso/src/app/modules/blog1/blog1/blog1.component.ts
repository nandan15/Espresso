import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../../footer/footer/footer.component";


@Component({
  selector: 'app-blog1',
  templateUrl: './blog1.component.html',
  styleUrls: ['./blog1.component.css'],

})
export class Blog1Component implements OnInit {
  selectedContent: any; // Holds the selected news item object


  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
 

  ngOnInit(): void {
  
  
  }

  showContent(newsItem: any): void {
    this.selectedContent = newsItem; 
  }
}
