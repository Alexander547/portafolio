import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TecnologiasComponent } from '../tecnologias/tecnologias.component';
import { HabilidadesBlandasComponent } from '../habilidades-blandas/habilidades-blandas.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TecnologiasComponent,
    HabilidadesBlandasComponent,
  ],
})
export class HomeComponent implements OnInit {
  constructor() {}

  descripcion: string = `Ingeniero en Sistemas con más de 4 años de experiencia desarrollando soluciones tecnológicas.

  👨‍💻 Frontend:
  Especializado en Angular, Tailwind CSS y PrimeNG. Apasionado por crear interfaces modernas, accesibles y eficientes, aplicando buenas prácticas y arquitectura limpia.

  🧠 Backend:
  Experto en el desarrollo de APIs REST con Node.js y NestJS. Manejo de bases de datos como PostgreSQL, integración de servicios en la nube como AWS (S3), gestión de transacciones, validaciones y patrones de diseño.

  🛠️ Soporte Técnico:
  Experiencia en brindar soporte y mantenimiento continuo sobre las soluciones implementadas, asegurando su correcto funcionamiento y evolución conforme a las necesidades del cliente.`;



  avatarUrl: string = 'assets/img/avatar.png';

  cvUrl = 'assets/cv/cv_alexanderAlvarez.pdf';

  ngOnInit() {}
}
