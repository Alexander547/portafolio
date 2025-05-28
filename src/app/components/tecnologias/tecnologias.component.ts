import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class TecnologiasComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  tecnologias = [
    { nombre: 'Angular', logo: 'assets/logos/angular.svg' },
    { nombre: 'NestJS', logo: 'assets/logos/nestjs.svg' },
    { nombre: 'NodeJs', logo: 'assets/logos/node.png' },
    { nombre: 'SCSS', logo: 'assets/logos/scss.svg' },
    { nombre: 'CSS3', logo: 'assets/logos/css3.svg' },
    { nombre: 'HTML5', logo: 'assets/logos/html5.svg' },
    { nombre: 'RxJS', logo: 'assets/logos/rxjs.svg' },
    { nombre: 'Capacitor', logo: 'assets/logos/capacitor.svg' },
    { nombre: 'JavaScript', logo: 'assets/logos/javascript.svg' },
    { nombre: 'TypeScript', logo: 'assets/logos/typescript.svg' },
    { nombre: 'Bootstrap', logo: 'assets/logos/bootstrap.svg' },
    { nombre: 'PrimeNG', logo: 'assets/logos/primeng.svg' },
    { nombre: 'jQuery', logo: 'assets/logos/jquery.svg' },
    { nombre: 'PostgreSQL', logo: 'assets/logos/postgresql.svg' },
    { nombre: 'NVM', logo: 'assets/logos/nvm.jpg' },
  ];

  herramientas = [
    { nombre: 'Jira', logo: 'assets/logos/jira.svg' },
    { nombre: 'Trello', logo: 'assets/logos/trello.png' },
    { nombre: 'Git', logo: 'assets/logos/git.svg' },
    { nombre: 'GitHub', logo: 'assets/logos/github.svg' },
    { nombre: 'GitLab', logo: 'assets/logos/gitlab.webp' },
    { nombre: 'VS Code', logo: 'assets/logos/vscode.svg' },
    { nombre: 'Slack', logo: 'assets/logos/slack.svg' },
    { nombre: 'Postman', logo: 'assets/logos/postman.svg' },
    { nombre: 'Figma', logo: 'assets/logos/figma.png' },
    { nombre: 'Docker', logo: 'assets/logos/docker.png' },
    { nombre: 'Notion', logo: 'assets/logos/notion.jpg' },
    { nombre: 'Zoom', logo: 'assets/logos/zoom.jpg' },
    { nombre: 'Swagger', logo: 'assets/logos/swagger.png' },
    { nombre: 'Brevo', logo: 'assets/logos/brevo.png' },
    { nombre: 'Puppeteer', logo: 'assets/logos/pupetter.png' },
    { nombre: 'SCRUM', logo: 'assets/logos/scrum.png' },
  ];
}
