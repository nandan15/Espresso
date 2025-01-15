import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { WallpaperComponent } from "./wallpaper/wallpaper.component";


const wallpaperRoutes:Routes=[
    {path:'',component:WallpaperComponent}
];
@NgModule({
    imports:[RouterModule.forChild(wallpaperRoutes)],
    exports:[RouterModule],
})
export class wallpaperrouter {}