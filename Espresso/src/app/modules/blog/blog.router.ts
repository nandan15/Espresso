import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { BlogComponent } from "./blog/blog.component";


const blogRoutes:Routes=[
    {path:'',component:BlogComponent,}
];
@NgModule({
    imports:[RouterModule.forChild(blogRoutes)],
    exports: [RouterModule],
})
export class blogrouter{}