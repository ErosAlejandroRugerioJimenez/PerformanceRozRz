import { Component, OnInit } from '@angular/core'; 
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Servicios } from './components/servicios/servicios';
import { Galeria } from './components/galeria/galeria';
import { Contacto } from './components/contacto/contacto';
import { Marcas } from './components/marcas/marcas';
import { Testimonios } from './components/testimonios/testimonios';
import { Faq } from './components/faq/faq';
import { GaleriaGeneral } from './components/galeria-general/galeria-general';
import AOS from 'aos'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Hero, Servicios, Galeria, Contacto, Marcas, Testimonios, Faq, GaleriaGeneral],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'performance-rozrz';

  ngOnInit() {
    AOS.init({
      duration: 800,           // Más tiempo para un efecto premium y suave
      once: true,              // ¡Clave! Solo anima la primera vez que bajas para no marear ni trabar el celular
      offset: 100,             // Dispara 100px antes de que aparezca (está perfecto)
      easing: 'ease-in-out',   // Aceleración y desaceleración fluida
      mirror: false            // Evita efectos raros al hacer scroll hacia arriba
    });
  }
}