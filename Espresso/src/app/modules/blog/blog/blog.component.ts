import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
selectedContent: string = `
    <title>Accent Walls: The Power of Focus</title>
    <p>An accent wall is a classic way to draw attention to a specific area of a room. Choose a wall that serves as a focal point, such as the one behind your bed, sofa, or dining table. Opt for a bold yet complementary color that contrasts with the rest of the room. Rich jewel tones like emerald green, deep navy, or burgundy add a sense of luxury, while softer shades like blush pink, sage green, or light gray exude calm elegance. If you're feeling adventurous, explore textured paints or wallpapers for added dimension.</p>
   
  `;

  newsItems = [
  
    // Additional existing news items...
    { 
      title: 'Accent Walls: The Power of Focus', 
      summary: 'An accent wall is a classic way to draw attention to a specific area of a room.', 
      content: `<h3>Accent Walls: The Power of Focus</h3><p>An accent wall is a classic way to draw attention to a specific area of a room. Choose a wall that serves as a focal point, such as the one behind your bed, sofa, or dining table. Opt for a bold yet complementary color that contrasts with the rest of the room. Rich jewel tones like emerald green, deep navy, or burgundy add a sense of luxury, while softer shades like blush pink, sage green, or light gray exude calm elegance. If you're feeling adventurous, explore textured paints or wallpapers for added dimension.</p>`
    },
    { 
      title: 'Creative Wall Stenciling', 
      summary: 'Wall stencils are a cost-effective way to add intricate designs to your walls.', 
      content: `<h3>Creative Wall Stenciling</h3><p>Wall stencils are a cost-effective way to add intricate designs to your walls without the expense of wallpaper. Whether you prefer geometric patterns, floral motifs, or abstract designs, stenciling allows you to personalize your space. A metallic paint finish over a neutral base can create a sophisticated look that mimics high-end decor. With just a few tools and a bit of patience, you can transform an ordinary wall into a statement piece.</p>`
    },
    { 
      title: 'Minimalist Wall Panels', 
      summary: 'Wall panels can instantly elevate a room\'s aesthetics.', 
      content: `<h3>Minimalist Wall Panels</h3><p>Wall panels can instantly elevate a room's aesthetics, giving it a refined and structured appearance. While traditional wood paneling might seem costly, there are budget-friendly alternatives like peel-and-stick panels or faux panel designs created with paint and masking tape. For a minimalist and modern effect, stick to monochromatic schemes or subtle contrasts.</p>`
    },
    { 
      title: 'Play with Textures and Finishes', 
      summary: 'Incorporating texture into your walls can add depth and sophistication.', 
      content: `<h3>Play with Textures and Finishes</h3><p>Incorporating texture into your walls can add depth and sophistication. Consider techniques like sponging, rag-rolling, or color washing with paints. These methods are inexpensive yet effective in creating a tactile and visually interesting surface. Matte and satin finishes are particularly on-trend and lend a subtle elegance to any space.</p>`
    },
    { 
      title: 'Wall Decals and Art', 
      summary: 'Wall decals are a quick and easy way to update your interiors.', 
      content: `<h3>Wall Decals and Art</h3><p>Wall decals are a quick and easy way to update your interiors. Available in various designs, from minimalist shapes to intricate patterns, they’re perfect for renters or anyone looking for a non-permanent solution. Pair decals with curated wall art or framed prints to create a gallery wall that reflects your personality and enhances the overall ambiance.</p>`
    },
    { 
      title: 'The Beauty of Neutral Palettes', 
      summary: 'A fresh coat of paint in neutral tones can work wonders for your home.', 
      content: `<h3>The Beauty of Neutral Palettes</h3><p>A fresh coat of paint in neutral tones can work wonders for your home. Shades like creamy white, soft beige, or warm gray create a timeless backdrop that complements any decor style. For added sophistication, paint your trims, moldings, and doors in contrasting colors like charcoal or deep brown.</p>`
    },
    { 
      title: 'Add a Touch of Nature', 
      summary: 'Consider incorporating natural elements into your wall decor.', 
      content: `<h3>Add a Touch of Nature</h3><p>Consider incorporating natural elements into your wall decor. Wooden shelves, hanging plants, or bamboo accents can infuse warmth and charm. Pair these with earthy-toned wall paints for a harmonious, nature-inspired look.</p>`
    }
  ];

  showContent(content: string): void {
    this.selectedContent = content;
  }
}
