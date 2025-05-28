import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Proyecto, PROYECTOS } from './proyectos.data';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[] = PROYECTOS;
  imagenModalUrl: string | null = null;
  imagenModalTitulo: string = '';
  imagenActualIndex: number = 0;
  imagenesGaleria: { url: string; nombre: string }[] = [];

  constructor() {}

  ngOnInit() {}

  openImageModal(
    imagenes: { url: string; nombre: string }[],
    index: number
  ): void {
    this.imagenesGaleria = imagenes;
    this.imagenActualIndex = index;
    this.imagenModalUrl = imagenes[index].url;
    this.imagenModalTitulo = imagenes[index].nombre;
  }

  closeImageModal(): void {
    this.imagenModalUrl = null;
    this.imagenModalTitulo = '';
    this.imagenActualIndex = 0;
    this.imagenesGaleria = [];
  }

  cambiarImagen(offset: number): void {
    const total = this.imagenesGaleria.length;
    this.imagenActualIndex = (this.imagenActualIndex + offset + total) % total;
    const nueva = this.imagenesGaleria[this.imagenActualIndex];
    this.imagenModalUrl = nueva.url;
    this.imagenModalTitulo = nueva.nombre;
  }
}
