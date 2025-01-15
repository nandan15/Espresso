import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { WallPanelingComponent } from "./wall-paneling/wall-paneling.component";



const wallpanelinRoutes:Routes=[
    {path:'',component:WallPanelingComponent}
];
@NgModule({
    imports:[RouterModule.forChild(wallpanelinRoutes)],
    exports:[RouterModule],
})
export class wallpanelingrouter {}