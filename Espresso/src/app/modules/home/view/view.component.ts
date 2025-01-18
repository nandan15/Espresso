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
      this.router.navigate(['/blog1']);
    }
    viewBlogPost1() {
      this.router.navigate(['/blog2']);
    }
    viewBlogPost2() {
      this.router.navigate(['/blog3']);
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
  
      
      
    }
  }
 

  
  

