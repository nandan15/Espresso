import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { ViewComponent } from "./view/view.component";
import { HomeComponent } from "./home/home.component";


const homeRoutes:Routes=[
    {path:'',component:HomeComponent,children:[
        {path:'view',component:ViewComponent}
    ]}
];
@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule],
})
export class homerouter { }