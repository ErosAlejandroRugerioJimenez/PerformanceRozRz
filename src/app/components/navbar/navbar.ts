import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [], 
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string) {
    // 1. SI PRESIONAN EL LOGO O "INICIO"
    if (sectionId === 'inicio') {
      // Forzamos al navegador a ir a la coordenada 0 (hasta arriba) suavemente
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } 
    // 2. SI PRESIONAN CUALQUIER OTRA OPCIÓN (Servicios, Galería, etc.)
    else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
  
}