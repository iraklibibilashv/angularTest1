import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Main } from './main/main';
import { Todo } from './todo/todo';
import { Home } from './home/home';
import { Menu } from './menu/menu';
import { Reservation } from './reservation/reservation';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Cart } from './cart/cart';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Main,Todo , Home , Menu , Reservation, About , Contact, Cart]  ,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angularTest1');



}





