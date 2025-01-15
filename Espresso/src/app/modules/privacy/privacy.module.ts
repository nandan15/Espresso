import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyComponent } from './privacy/privacy.component';
import { privacyrouter } from './privacy.router';
privacyrouter


@NgModule({
  declarations: [
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    privacyrouter,
  ]
})
export class PrivacyModule { }
