import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-blog3',
  templateUrl: './blog3.component.html',
  styleUrls: ['./blog3.component.css']
})
export class Blog3Component implements OnInit {
  selectedContent: any; // Holds the selected news item object
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  newsItems = [
    { 
      title: ' Revamp Your Walls with a Splash of Color', 
      summary: 'One of the easiest and most effective ways to transform your space is by changing the wall color. Opt for neutral tones for a timeless look or bold accent walls to create a striking focal point. If repainting feels too time-intensive, consider adding removable wallpaper or wall decals for an instant update.',
      image: '/assets/blog2splashwithcolour.png',
      // content: `<h3>Accent Walls: The Power of Focus</h3><p>An accent wall is a classic way to draw attention to a specific area of a room...</p>`
    },
    { 
      title: ' Upgrade Your Lighting', 
      summary: ' Lighting can dramatically influence the ambiance of a room. Replace outdated fixtures with modern, stylish options to enhance your home’s aesthetic.',
      image: '/assets/blog2lights.png',
      // content: `<h3>Creative Wall Stenciling</h3><p>Wall stencils are a cost-effective way to add intricate designs to your walls...</p>`
    },
    { 
      title: 'Rearrange Furniture for Better Flow', 
      summary: ' Sometimes a simple rearrangement of furniture can make a room feel entirely new. Focus on creating an open and welcoming layout by decluttering and repositioning pieces to optimize space and functionality.',
      image: '/assets/blog2rearrangefurniture.png',
      // content: `<h3>Minimalist Wall Panels</h3><p>Wall panels can instantly elevate a room's aesthetics...</p>`
    },
    { 
      title: ' Introduce Statement Pieces', 
      summary: 'Incorporate one or two statement pieces to elevate your space. A bold area rug, a vibrant piece of artwork, or a unique coffee table can become the centerpiece of a room and draw attention away from less exciting elements',
      image: '/assets/blog2statementpiece.png',
      // content: `<h3>Play with Textures and Finishes</h3><p>Incorporating texture into your walls can add depth...</p>`
    },
    { 
      title: ' Enhance Soft Furnishings', 
      summary: ' Swap out old cushions throws and curtains for fresh designs that align with your updated color scheme',
      image: '/assets/blog2softfurnishings.png',
      // content: `<h3>Wall Decals and Art</h3><p>Wall decals are a quick and easy way to update your interiors...</p>`
    },
    { 
      title: 'Add Greenery', 
      summary: 'Plants are a cost-effective way to breathe life into your home. Whether it’s a large potted plant in the living room or small succulents on a windowsill, greenery can instantly uplift any space',
      image: '/assets/blog2greenery.png',
      // content: `<h3>The Beauty of Neutral Palettes</h3><p>A fresh coat of paint in neutral tones can work wonders...</p>`
    },
    { 
      title: ' Focus on Details', 
      summary: ' Small changes in decor can have a big impact. Swap out hardware on cabinets and drawers replace old switch plates, or add new knobs and handles to refresh your furniture.',
      image: '/assets/blog2focusondetails.png',
      // content: `<h3>Add a Touch of Nature</h3><p>Consider incorporating natural elements into your wall decor...</p>`
    },
    { 
      title: 'Declutter and Organize', 
      summary: '  A clutter-free space feels more spacious and inviting. Use stylish storage solutions like woven baskets or minimalist shelving to keep everything tidy and within reach.',
      image: '/assets/blog2declutter.png',
      // content: `<h3>Add a Touch of Nature</h3><p>Consider incorporating natural elements into your wall decor...</p>`
    },
    { 
      title: 'Use Mirrors to Expand Space', 
      summary: ' Strategically placed mirrors can make rooms appear larger and brighter by reflecting natural light. Place a large mirror opposite a window to maximize the effect.',
      image: '/assets/blog2mirror.png',
      // content: `<h3>Add a Touch of Nature</h3><p>Consider incorporating natural elements into your wall decor...</p>`
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

