import { Component, AfterViewInit,HostListener  } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements AfterViewInit {

  isSticky: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.pageYOffset > 0;
  }
  constructor(private router: Router) {}
    ngAfterViewInit(): void {
      throw new Error('Method not implemented.');
    }
   
    scrollToTop1(): void {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    scrollToTop() {

      (function smoothscroll() {

          var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

          if (currentScroll > 0) {

              window.requestAnimationFrame(smoothscroll);

              window.scrollTo(0, currentScroll - (currentScroll / 8));

          }

      })();
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
 

  
  

