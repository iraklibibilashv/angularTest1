import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output,  } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from "@angular/router";

@Component({
  selector: 'app-header',
    standalone: true,
  imports: [RouterLink,RouterModule,RouterLinkActive,NgClass],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {



  get cartCount(): number {
    const items: any[] = JSON.parse(localStorage.getItem("itemToken") || "[]");
    return items.reduce((sum, i) => sum + i.quantity, 0);
  }
    @Output() cartClick = new EventEmitter();
    isMenuOpen = false;

  toggleNav() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
