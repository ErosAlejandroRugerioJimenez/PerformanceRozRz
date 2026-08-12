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
    window.history.replaceState({}, document.title, window.location.pathname);
    AOS.init({
      duration: 400,           // REDUCIDO: 400ms es el punto dulce. Se ve premium pero termina rápido, liberando memoria.
      once: true,              // ¡Perfecto que lo tengas así!
      offset: 50,              // REDUCIDO: Al bajar a 50px, la orden de animar se dispara antes y evita cuellos de botella.
      easing: 'ease-out-cubic',// MODIFICADO: Esta curva matemática es más "barata" de procesar para la computadora que ease-in-out.
      mirror: false            // Excelente.
    });
  }
}