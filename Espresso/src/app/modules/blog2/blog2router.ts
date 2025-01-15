import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { Blog2Component } from "./blog2/blog2.component";



const blog2Routes:Routes=[
    {path:'',component:Blog2Component,}
];
@NgModule({
    imports:[RouterModule.forChild(blog2Routes)],
    exports: [RouterModule],
})
export class blog2router{}