import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {


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
  viewblog1() {
    this.router.navigate(['/blog1']);
  }
  viewblog2() {
    this.router.navigate(['/blog2']);
  }
  viewblog3() {
    this.router.navigate(['/blog3']);
  }
  viewprivacy() {
    this.router.navigate(['/privacy']);
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
 

  
  

