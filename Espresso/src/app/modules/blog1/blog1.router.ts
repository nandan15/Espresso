import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { Blog1Component } from "./blog1/blog1.component";


const blog1Routes:Routes=[
    {path:'',component:Blog1Component,}
];
@NgModule({
    imports:[RouterModule.forChild(blog1Routes)],
    exports: [RouterModule],
})
export class blog1router{}