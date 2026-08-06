import { Component } from '@angular/core';
// Si tienes otros imports, déjalos sin problema

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [], // Tus imports si tienes alguno
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  // Esta variable controla el menú
  isMenuOpen = false;

  // Esta función invierte el estado (si está cerrado lo abre, y viceversa)
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}