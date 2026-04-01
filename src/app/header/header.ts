import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from "@angular/router";

@Component({
  selector: 'app-header',
    standalone: true,
  imports: [RouterLink,RouterModule,RouterLinkActive,NgClass],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
    isMenuOpen = false;

  toggleNav() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
