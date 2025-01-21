import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WallpaperComponent } from './wallpaper/wallpaper.component';
import { wallpaperrouter } from './wallpaper.router';
import { HeaderModule } from "../header/header.module";
import { FooterModule } from "../footer/footer.module";


@NgModule({
  declarations: [
    WallpaperComponent
  ],
  imports: [
    CommonModule,
    wallpaperrouter,
    HeaderModule,
    FooterModule
]
})
export class WallpaperModule { }
