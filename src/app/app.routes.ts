import { Routes } from '@angular/router';

export const routes: Routes = [
    {
       path : "main",
       loadComponent : () => import("../app/main/main").then(m => m.Main)

    },
    {
    path : "todo",
    loadComponent : () => import("./todo/todo").then(m => m.Todo)
},

];
