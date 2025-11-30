import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NavComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isNavOpen = true;

  showNav() {
    this.isNavOpen = !this.isNavOpen;
  }
}
