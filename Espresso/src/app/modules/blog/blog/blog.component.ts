import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {


    
    const ifrm: HTMLIFrameElement | null = document.getElementById('appointy-iframe') as HTMLIFrameElement;

    if (ifrm) {
     
      window.addEventListener('message', (e: MessageEvent) => {
        const data = e.data || {};
        
        
        if (data.type === 'height') {
          ifrm.style.height = `${data.data}px`;
        }

       
        if (data.type === 'scroll') {
          ifrm.scrollIntoView();
        }

       
        if (data.type === 'appointmentConfirmed') {
          
          window.location.href = 'http://localhost:4200/home/view'; 
        }
        if (data.type === 'height') {
          ifrm.style.height = `${data.data}px`;
        }

        if (data.type === 'scroll') {
          ifrm.scrollIntoView();
        }
      });
    }
  }
}
