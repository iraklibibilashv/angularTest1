import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Main } from './main/main';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Main],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angularTest1');



}





