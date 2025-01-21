import { Component, AfterViewInit,HostListener  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thank',
  templateUrl: './thank.component.html',
  styleUrls: ['./thank.component.css']
})
export class ThankComponent implements AfterViewInit, AfterViewInit{
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

    viewhome() {
      this.router.navigate(['/home/view']);
    }
}
