import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades-blandas',
  templateUrl: './habilidades-blandas.component.html',
  styleUrls: ['./habilidades-blandas.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class HabilidadesBlandasComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  softSkills = [
    { icon: '📢', label: 'Comunicación efectiva' },
    { icon: '🤝', label: 'Trabajo en equipo ágil (Scrum)' },
    { icon: '🧠', label: 'Pensamiento analítico' },
    { icon: '🚀', label: 'Proactividad y liderazgo técnico' },
    { icon: '📅', label: 'Organización y enfoque en resultados' },
    { icon: '🛠️', label: 'Resolución de problemas complejos' },
    { icon: '🔄', label: 'Adaptabilidad y aprendizaje continuo' },
  ];
}
