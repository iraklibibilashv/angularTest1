import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angularTest1');
}

fetch ("https://restaurant.stepprojects.ge/api/Products/GetAll")
.then(resp => resp.json())
.then(data => {
  console.log(data);
  
  
})



