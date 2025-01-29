import { Component,OnInit, AfterViewInit,HostListener  } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit, AfterViewInit {
  
  activeStep: number = 1;
  steps = [
    { 
      title: 'Contact Us', 
      description: ['Fill A Simple Form'],
      icon: 'fa-solid fa-envelope' // Icon for this step
    },
    { 
      title: 'Consultation With Design Lead', 
      description: [
        'Detailed Finishes And Requirements Discussed'
      ],
      icon: 'fa-solid fa-users' // Icon for this step
    },
    { 
      title: 'Pay Booking Amount', 
      description: [
        'Booking Confirmed'
      ],
      icon: 'fa-solid fa-credit-card' // Icon for this step
    },
    { 
      title: 'Design Consultation At Your Home', 
      description: [
        'Selection Of Actual Finishes'
      ],
      icon: 'fa-solid fa-home' // Icon for this step
    },
    { 
      title: 'Work Begins', 
      description: ['Relax And Vibgyor Will Take Care Of The Rest!'],
      icon: 'fa-solid fa-cogs' // Icon for this step
    }
  ];
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
  
      this.syncStepsWithCarousel();
      
    }
 
    syncStepsWithCarousel() {
      const carouselElement = document.querySelector('#carouselExampleCrossfade');
      if (carouselElement) {
        carouselElement.addEventListener('slide.bs.carousel', (event: any) => {
          this.activeStep = event.to + 1; 
        });
      }
    }
  }
 

  
  

