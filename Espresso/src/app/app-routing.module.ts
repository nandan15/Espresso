import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home/view', pathMatch: 'full' },
  {path:'design',loadChildren:() => import('./modules/design/design.module').then(m=>m.DesignModule)},
  {path:'thank',loadChildren:() => import('./modules/thank/thank.module').then(m=>m.ThankModule)},
  {path:'footer',loadChildren:() => import('./modules/footer/footer.module').then(m => m.FooterModule)},
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'wallpaper', loadChildren: () => import('./modules/wallpaper/wallpaper.module').then(m => m.WallpaperModule) },
  { path: 'wallpaneling', loadChildren: () => import('./modules/wall-paneling/wall-paneling.module').then(m => m.WallPanelingModule) },
  { path: 'curtains', loadChildren: () => import('./modules/curtains/curtains.module').then(m => m.CurtainsModule) },
  { path: 'header', loadChildren: () => import('./modules/header/header.module').then(m => m.HeaderModule) },
  { path: 'painting', loadChildren: () => import('./modules/painting/painting.module').then(m => m.PaintingModule) },
  { path: 'blog', loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule) },
  { path: 'project', loadChildren: () => import('./modules/project/project.module').then(m => m.ProjectModule) },
  { path: 'blog1', loadChildren: () => import('./modules/blog1/blog1.module').then(m => m.Blog1Module) },
  { path: 'blog2', loadChildren: () => import('./modules/blog2/blog2.module').then(m => m.Blog2Module) },
  { path: 'blog3', loadChildren: () => import('./modules/blog3/blog3.module').then(m => m.Blog3Module) },
  { path: 'privacy', loadChildren: () => import('./modules/privacy/privacy.module').then(m => m.PrivacyModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }