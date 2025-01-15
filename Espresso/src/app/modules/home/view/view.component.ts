import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements AfterViewInit {


  constructor(private router: Router) {}
    ngAfterViewInit(): void {
      throw new Error('Method not implemented.');
    }
   
  
  
    viewBlogPost() {
      this.router.navigate(['/blog']);
    }
    viewproject() {
      this.router.navigate(['/project']);
    }
    viewpainting() {
      this.router.navigate(['/painting']);
    }
    viewwallpaper() {
      this.router.navigate(['/wallpaper']);
    }
    viewwallpaneling() {
      this.router.navigate(['//wallpaneling']);
    }
    viewcurtains() {
      this.router.navigate(['/curtains']);
    }
   
  
  
    ngOnInit(): void {
      const video = document.getElementById('serviceVideo') as HTMLVideoElement;
    
      if (video) {
        video.muted = true;  
        video.autoplay = true;
        video.loop = true;
        video.play();
    
       
        video.addEventListener('click', () => {
          video.muted = !video.muted;  
        });
    
     
        video.addEventListener('ended', () => {
          video.currentTime = 0;
          video.play();
        });
      }
  
      
      // window.scrollTo(0, 0);
  
      // // Optional: If you want to ensure you are at the home route after refresh, use this.
      // if (this.router.url === '/') {
      //   this.router.navigate(['/header']);  // Navigate to the home route
      // }
    }
  }
 

  
  

