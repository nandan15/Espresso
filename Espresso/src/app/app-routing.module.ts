import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'',redirectTo:'/home/view',pathMatch:"full"}, 
 {path:'home',loadChildren:()=>import('../app/modules/home/home.module').then(m=>m.HomeModule)},
 {path:'wallpaper',loadChildren:()=>import('../app/modules/wallpaper/wallpaper.module').then(m=>m.WallpaperModule)},
 {path:'wallpaneling',loadChildren:()=>import('../app/modules/wall-paneling/wall-paneling.module').then(m=>m.WallPanelingModule)},
 {path:'curtains',loadChildren:()=>import('../app/modules/curtains/curtains.module').then(m=>m.CurtainsModule)},
 {path:'header',loadChildren:()=>import('../app/modules/header/header.module').then(m=>m.HeaderModule)},
 {path:'painting',loadChildren:()=>import('../app/modules/painting/painting.module').then(m=>m.PaintingModule)},
 {path:'blog',loadChildren:()=>import('../app/modules/blog/blog.module').then(m=>m.BlogModule)},
 {path:'project',loadChildren:()=>import('../app/modules/project/project.module').then(m=>m.ProjectModule)},
 {path:'blog1',loadChildren:()=>import('../app/modules/blog1/blog1.module').then(m=>m.Blog1Module)},
 {path:'blog2',loadChildren:()=>import('../app/modules/blog2/blog2.module').then(m=>m.Blog2Module)},
 {path:'blog3',loadChildren:()=>import('../app/modules/blog3/blog3.module').then(m=>m.Blog3Module)},
 {path:'privacy',loadChildren:()=>import('../app/modules/privacy/privacy.module').then(m=>m.PrivacyModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
