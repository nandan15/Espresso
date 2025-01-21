import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { footerRoutingModule } from './footer.router';




@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    footerRoutingModule
  
  ],
  exports:[FooterComponent]
})
export class FooterModule { }
