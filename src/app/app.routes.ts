import { Routes } from '@angular/router';

export const routes: Routes = [
      {
    path : "",
    redirectTo : "home",
    pathMatch : "full"
  },
    {
       path : "main",
       loadComponent : () => import("../app/main/main").then(m => m.Main)

    },
    {
    path : "todo",
    loadComponent : () => import("./todo/todo").then(m => m.Todo)
},
{
    path : "home",
    loadComponent : () => import("./home/home").then(m => m.Home)
},
{
    path : "menu",
    loadComponent : () => import("./menu/menu").then(m => m.Menu)

},
{
    path : "reservation",
    loadComponent : () => import("./reservation/reservation").then(m => m.Reservation)

},
{
    path : "about",
    loadComponent : () => import("./about/about").then(m => m.About)
},
{
    path : "contact",
    loadComponent : () => import("./contact/contact").then(m => m.Contact)
},
{
    path : "cart",
    loadComponent : () => import("./cart/cart").then(m => m.Cart)
},
{
    path : "**",
    loadComponent : () => import("./error/error").then(m => m.Error)
},


];
