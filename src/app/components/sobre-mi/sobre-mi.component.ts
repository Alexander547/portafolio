import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class SobreMiComponent implements OnInit {
  descripcion: string = `
Soy una persona curiosa y apasionada por la tecnología y el aprendizaje continuo.
Me gusta trabajar en equipo y compartir conocimientos, siempre con una actitud positiva y orientada a resultados.
  `;

  pasatiempos: string[] = [
    'Leer libros de tecnología y ciencia',
    'Jugar ajedrez',
    'Fan de los videojuegos',
    'Practicar deportes sobre todo el Voleibol',
    'Explorar nuevas tecnologías y frameworks',
  ];

  valores: string[] = [
    'Responsabilidad',
    'Transparencia',
    'Compromiso con la calidad',
    'Colaboración',
    'Innovación',
  ];
  constructor() {}

  ngOnInit() {}
}
