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
  newsItems = [
    { 
      title: '1. Designer Wall Paneling: Adding Depth and Dimension', 
      summary: 'Wall paneling is a versatile tool for upgrading your interiors. When used thoughtfully, it can create a sense of depth and spaciousness in any room',
      image: '/assets/blog4designerwallpaneling.png'
    },
    { 
      title: '2. Curtains: The Magic of Height and Light', 
      summary: 'Curtains play a vital role in shaping the perception of space. The right choice of curtains can make your home feel more expansive and inviting.',
      image: '/assets/blog4curtains.png'
    },
    { 
      title: '3. Soft Furnishings: Enhancing Comfort and Space', 
      summary: 'Soft furnishings such as rugs, cushions, and throws can create a cohesive look while enhancing the illusion of space.',
      image: '/assets/blog4softfurnishing.png'
    },
    { 
      title: '4. Maximize Natural Light', 
      summary: 'Natural light is a crucial factor in making a space feel bigger and brighter. Ensure windows are unobstructed and use light-enhancing elements like mirrors and reflective surfaces to distribute sunlight effectively.',
      image: '/assets/blog4naturallight.png'
    },
    { 
      title: '5. Keep It Minimal', 
      summary: 'While adding designer touches, remember to maintain a sense of minimalism. Clutter can quickly make a space feel smaller. Prioritize functionality and carefully curate decorative items to keep the room open and airy.',
      image: '/assets/blog4keepitminimal.png'
    }
  ];

  ngOnInit(): void {
    // Initialize with the first blog item
    this.selectedContent = this.newsItems[0];
  }

  showContent(newsItem: any): void {
    this.selectedContent = newsItem; // Assign the selected object to `selectedContent`
  }
}
