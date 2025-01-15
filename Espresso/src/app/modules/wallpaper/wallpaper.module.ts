import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WallpaperComponent } from './wallpaper/wallpaper.component';
import { wallpaperrouter } from './wallpaper.router';


@NgModule({
  declarations: [
    WallpaperComponent
  ],
  imports: [
    CommonModule,
    wallpaperrouter
  ]
})
export class WallpaperModule { }
