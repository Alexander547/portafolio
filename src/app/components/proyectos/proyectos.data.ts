// proyectos.data.ts
export interface Proyecto {
  nombre: string;
  descripcion: string;
  imagenes: { nombre: string; url: string }[];
  tecnologias: { nombre: string; logo: string }[];
}

export const PROYECTOS: Proyecto[] = [
  {
    nombre: 'Questia',
    descripcion: `Questia es un sistema robusto para la creación, distribución y análisis de encuestas. Su diseño modular permite construir formularios dinámicos con lógica condicional, recolectar respuestas en tiempo real y generar informes estadísticos interactivos para facilitar la toma de decisiones.

Este es mi proyecto más reciente y lo estoy desarrollando de forma independiente, como parte de mi incursión en el mundo del software como servicio (SaaS).

Actualmente, se encuentra en desarrollo, y nace con el propósito de ofrecer una solución flexible, intuitiva y escalable para organizaciones y profesionales que necesitan recolectar datos de manera efectiva y convertirlos en conocimiento útil.`,
    imagenes: [
      { nombre: 'Página principal', url: 'assets/proyectos/questia/home.png' },
      { nombre: 'Inicio de Sesión', url: 'assets/proyectos/questia/login.png' },
      { nombre: 'Principal', url: 'assets/proyectos/questia/principal.png' },
    ],
    tecnologias: [
      { nombre: 'Angular', logo: 'assets/logos/angular.svg' },
      { nombre: 'TypeScript', logo: 'assets/logos/typescript.svg' },
      { nombre: 'SCSS', logo: 'assets/logos/scss.svg' },
      { nombre: 'RxJs', logo: 'assets/logos/rxjs.svg' },
      { nombre: 'TailwindCss', logo: 'assets/logos/tailwind.svg' },
      { nombre: 'NodeJs', logo: 'assets/logos/node.png' },
      { nombre: 'NestJs', logo: 'assets/logos/nestjs.svg' },
      { nombre: 'PostgreSQL', logo: 'assets/logos/postgresql.svg' },
      { nombre: 'Scrum', logo: 'assets/logos/scrum.png' },
      { nombre: 'GitHub', logo: 'assets/logos/github.svg' },
      { nombre: 'JIRA', logo: 'assets/logos/jira.svg' },
      { nombre: 'VSCode', logo: 'assets/logos/vscode.svg' },
      { nombre: 'AWS S3', logo: 'assets/logos/aws.svg' },
      { nombre: 'Brevo', logo: 'assets/logos/brevo.png' },
      { nombre: 'Postman', logo: 'assets/logos/postman.svg' },
      { nombre: 'PrimeNg', logo: 'assets/logos/primeng.svg' },
    ],
  },
  {
    nombre: 'Trámites Aguazul',
    descripcion: `Trámites Aguazul es una plataforma desarrollada con enfoque en la transformación digital del Estado, cumpliendo con la normativa nacional de Gobierno en Línea y los lineamientos de gobierno digital en Colombia.

El sistema permite a las entidades públicas gestionar trámites ciudadanos de forma ágil, centralizada y transparente, facilitando la interacción entre el ciudadano y la administración.

Todos sus componentes visuales y de navegación están basados en el Kit UI del Gobierno, asegurando coherencia visual e institucional, accesibilidad y usabilidad.

Trámites Aguazul es 100% configurable, permitiendo a cada entidad adaptar módulos, formularios, flujos, permisos y contenidos sin necesidad de cambios en el código base.

Es una herramienta pensada para la interoperabilidad, la mejora continua de procesos y la prestación eficiente de servicios públicos digitales.`,
    imagenes: [
      { nombre: 'Página principal', url: 'assets/proyectos/aguazul/home.png' },
      { nombre: 'Inicio ciudadano', url: 'assets/proyectos/aguazul/qa.png' },
      { nombre: 'DashBoard', url: 'assets/proyectos/aguazul/dashboard.png' },
      {
        nombre: 'Geolocalización',
        url: 'assets/proyectos/aguazul/geolocalizacion.png',
      },
      { nombre: 'Multirol', url: 'assets/proyectos/aguazul/multirol.png' },
      {
        nombre: 'Certificados Personalizados',
        url: 'assets/proyectos/aguazul/certificadospersonalizados.png',
      },
      {
        nombre: 'Lista de Trámites',
        url: 'assets/proyectos/aguazul/tramiteslist.png',
      },
      {
        nombre: 'Trámites Configurables',
        url: 'assets/proyectos/aguazul/tramitConfigurable.png',
      },
      { nombre: 'Auditoria', url: 'assets/proyectos/aguazul/auditoria.png' },
      { nombre: 'Trámites', url: 'assets/proyectos/aguazul/tramites.png' },
      {
        nombre: 'Creación de Trámite por el ciudadano',
        url: 'assets/proyectos/aguazul/crearTramite.png',
      },
    ],
    tecnologias: [
      { nombre: 'Angular', logo: 'assets/logos/angular.svg' },
      { nombre: 'TypeScript', logo: 'assets/logos/typescript.svg' },
      { nombre: 'JavaScript', logo: 'assets/logos/javascript.svg' },
      { nombre: 'SCSS', logo: 'assets/logos/scss.svg' },
      { nombre: 'RxJs', logo: 'assets/logos/rxjs.svg' },
      { nombre: 'TailwindCss', logo: 'assets/logos/tailwind.svg' },
      { nombre: 'NodeJs', logo: 'assets/logos/node.png' },
      { nombre: 'NestJs', logo: 'assets/logos/nestjs.svg' },
      { nombre: 'PostgreSQL', logo: 'assets/logos/postgresql.svg' },
      { nombre: 'Scrum', logo: 'assets/logos/scrum.png' },
      { nombre: 'GitHub', logo: 'assets/logos/github.svg' },
      { nombre: 'JIRA', logo: 'assets/logos/jira.svg' },
      { nombre: 'VSCode', logo: 'assets/logos/vscode.svg' },
      { nombre: 'AWS S3', logo: 'assets/logos/aws.svg' },
      { nombre: 'Brevo', logo: 'assets/logos/brevo.png' },
      { nombre: 'Postman', logo: 'assets/logos/postman.svg' },
      { nombre: 'PrimeNg', logo: 'assets/logos/primeng.svg' },
      { nombre: 'Puppeteer', logo: 'assets/logos/pupetter.png' },
    ],
  },
  {
    nombre: 'Tickets',
    descripcion: `Tickets es una solución desarrollada de manera independiente para gestionar solicitudes, incidencias y requerimientos dentro de una organización.

                  Diseñado para optimizar la comunicación entre equipos y llevar un control eficiente de tareas, el sistema permite crear, asignar, actualizar y resolver tickets de forma ágil y organizada.

                  Incluye funcionalidades como panel de administración, notificaciones, seguimiento por estados, historial de acciones y filtrado por prioridad o responsable.

                  Este proyecto fue una iniciativa personal para profundizar en arquitectura de software modular, control de estados, y buenas prácticas en desarrollo full-stack, integrando tecnologías modernas tanto en frontend como backend.`,
    imagenes: [
      { nombre: 'Home', url: 'assets/proyectos/tickets/home.png' },
      {
        nombre: 'Login',
        url: 'assets/proyectos/tickets/login.png',
      },
      {
        nombre: 'Tickets',
        url: 'assets/proyectos/tickets/tickets.png',
      },
      {
        nombre: 'Creación',
        url: 'assets/proyectos/tickets/crear.png',
      },
      { nombre: 'Detalles', url: 'assets/proyectos/tickets/detalle.png' },
      {
        nombre: 'Seguimientos',
        url: 'assets/proyectos/tickets/seguimiento.png',
      },
    ],
    tecnologias: [
      { nombre: 'Angular', logo: 'assets/logos/angular.svg' },
      { nombre: 'RxJs', logo: 'assets/logos/rxjs.svg' },
      { nombre: 'TailwindCss', logo: 'assets/logos/tailwind.svg' },
      { nombre: 'NodeJs', logo: 'assets/logos/node.png' },
      { nombre: 'NestJs', logo: 'assets/logos/nestjs.svg' },
      { nombre: 'PostgreSQL', logo: 'assets/logos/postgresql.svg' },
      { nombre: 'Scrum', logo: 'assets/logos/scrum.png' },
      { nombre: 'Figma', logo: 'assets/logos/figma.png' },
      { nombre: 'GitHub', logo: 'assets/logos/github.svg' },
      { nombre: 'JIRA', logo: 'assets/logos/jira.svg' },
      { nombre: 'VSCode', logo: 'assets/logos/vscode.svg' },
      { nombre: 'Capacitor', logo: 'assets/logos/capacitor.svg' },
      { nombre: 'AWS S3', logo: 'assets/logos/aws.svg' },
      { nombre: 'Brevo', logo: 'assets/logos/brevo.png' },
      { nombre: 'Postman', logo: 'assets/logos/postman.svg' },
      { nombre: 'PrimeNg', logo: 'assets/logos/primeng.svg' },
    ],
  },
  {
    nombre: 'Gestor PQRS y Gestor Documental',
    descripcion: `Gestor PQRS y Gestor Documental es una solución integral desarrollada de forma independiente con el objetivo de optimizar la atención ciudadana y la administración de documentos institucionales. Este software fue concebido como una propuesta tecnológica para modernizar los procesos internos de la universidad donde cursé mi carrera profesional.

La plataforma permite gestionar de manera eficiente las Peticiones, Quejas, Reclamos y Sugerencias (PQRS), garantizando trazabilidad, tiempos de respuesta óptimos y cumplimiento normativo. Al mismo tiempo, el Gestor Documental facilita la organización, almacenamiento y recuperación de documentos oficiales, asegurando control de versiones, acceso seguro y estructura archivística conforme a buenas prácticas documentales.

Diseñado pensando en el entorno universitario y adaptable a entidades públicas o privadas, este sistema busca reducir la carga operativa, centralizar la información y mejorar la experiencia tanto del usuario final como del personal administrativo.`,
    imagenes: [
      { nombre: 'login', url: 'assets/proyectos/gestion-pqrs/login.png' },
      {
        nombre: 'DashBoard',
        url: 'assets/proyectos/gestion-pqrs/dashboard.png',
      },
      {
        nombre: 'Configurable',
        url: 'assets/proyectos/gestion-pqrs/configuracion.png',
      },
      {
        nombre: 'Noticias',
        url: 'assets/proyectos/gestion-pqrs/noticias.png',
      },
      {
        nombre: 'Peticiones',
        url: 'assets/proyectos/gestion-pqrs/peticiones.png',
      },
      {
        nombre: 'Detalles',
        url: 'assets/proyectos/gestion-pqrs/detalle2.png',
      },
      {
        nombre: 'Crear Petición',
        url: 'assets/proyectos/gestion-pqrs/nuevapeticion.png',
      },
      {
        nombre: 'Registro de Petición Público',
        url: 'assets/proyectos/gestion-pqrs/registropublic.png',
      },
    ],
    tecnologias: [
      { nombre: 'Angular', logo: 'assets/logos/angular.svg' },
      { nombre: 'RxJs', logo: 'assets/logos/rxjs.svg' },
      { nombre: 'TailwindCss', logo: 'assets/logos/tailwind.svg' },
      { nombre: 'NodeJs', logo: 'assets/logos/node.png' },
      { nombre: 'NestJs', logo: 'assets/logos/nestjs.svg' },
      { nombre: 'PostgreSQL', logo: 'assets/logos/postgresql.svg' },
      { nombre: 'Scrum', logo: 'assets/logos/scrum.png' },
      { nombre: 'GitHub', logo: 'assets/logos/github.svg' },
      { nombre: 'Trello', logo: 'assets/logos/trello.png' },
      { nombre: 'VSCode', logo: 'assets/logos/vscode.svg' },
      { nombre: 'AWS S3', logo: 'assets/logos/aws.svg' },
      { nombre: 'Brevo', logo: 'assets/logos/brevo.png' },
      { nombre: 'Postman', logo: 'assets/logos/postman.svg' },
      { nombre: 'PrimeNg', logo: 'assets/logos/primeng.svg' },
    ],
  },
  {
    nombre: 'Innovagest',
    descripcion: `Software integral de gestión diseñado para administrar la información de profesionales que brindan servicios en el ámbito de ARL (Administradora de Riesgos Laborales) y áreas relacionadas. La plataforma permite manejar perfiles de profesionales, generación y control de cuentas de cobro, elaboración de informes detallados entre otros,además brinda seguimiento de procesos administrativos, facilitando la organización y el control eficiente de todas las actividades vinculadas a los servicios ARL.`,
    imagenes: [
      { nombre: 'Login', url: 'assets/proyectos/innovagest/login.png' },
      {
        nombre: 'Calendario',
        url: 'assets/proyectos/innovagest/calendario.png',
      },
      {
        nombre: 'Cuentas de Cobro',
        url: 'assets/proyectos/innovagest/cuentas.png',
      },
      { nombre: 'Ordenes', url: 'assets/proyectos/innovagest/ordenes.png' },
    ],
    tecnologias: [
      { nombre: 'Angular', logo: 'assets/logos/angular.svg' },
      { nombre: 'RxJs', logo: 'assets/logos/rxjs.svg' },
      { nombre: 'TailwindCss', logo: 'assets/logos/tailwind.svg' },
      { nombre: 'NodeJs', logo: 'assets/logos/node.png' },
      { nombre: 'NestJs', logo: 'assets/logos/nestjs.svg' },
      { nombre: 'PostgreSQL', logo: 'assets/logos/postgresql.svg' },
      { nombre: 'Scrum', logo: 'assets/logos/scrum.png' },
      { nombre: 'Figma', logo: 'assets/logos/figma.png' },
      { nombre: 'GitHub', logo: 'assets/logos/github.svg' },
      { nombre: 'JIRA', logo: 'assets/logos/jira.svg' },
      { nombre: 'VSCode', logo: 'assets/logos/vscode.svg' },
      { nombre: 'Capacitor', logo: 'assets/logos/capacitor.svg' },
      { nombre: 'AWS S3', logo: 'assets/logos/aws.svg' },
      { nombre: 'Brevo', logo: 'assets/logos/brevo.png' },
    ],
  },
  {
    nombre: 'Andromeda',
    descripcion: `Sistema avanzado de gestión diseñado para optimizar y automatizar el control del impuesto de Industria y Comercio en el municipio de Maní, Casanare. Andromeda facilita el registro, seguimiento y cálculo de obligaciones tributarias, mejorando la eficiencia administrativa y la transparencia en los procesos fiscales locales. Con una interfaz intuitiva y herramientas robustas, este software contribuye a una gestión tributaria ágil y confiable para la administración pública y los contribuyentes.`,
    imagenes: [
      { nombre: 'Login', url: 'assets/proyectos/andromeda/login.png' },
      {
        nombre: 'Declaraciones',
        url: 'assets/proyectos/andromeda/declaraciones.png',
      },
      {
        nombre: 'Detalle Declaración',
        url: 'assets/proyectos/andromeda/detalledeclaracion.png',
      },
      {
        nombre: 'Calendario',
        url: 'assets/proyectos/andromeda/calendario.png',
      },
      {
        nombre: 'Acuerdos',
        url: 'assets/proyectos/andromeda/acuerdos.png',
      },
      {
        nombre: 'Interfaces',
        url: 'assets/proyectos/andromeda/interfaces.png',
      },
    ],

    tecnologias: [
      { nombre: 'Angular', logo: 'assets/logos/angular.svg' },
      { nombre: 'RxJs', logo: 'assets/logos/rxjs.svg' },
      { nombre: 'CSS', logo: 'assets/logos/css3.svg' },
      { nombre: 'NodeJs', logo: 'assets/logos/node.png' },
      { nombre: 'NestJs', logo: 'assets/logos/nestjs.svg' },
      { nombre: 'PostgreSQL', logo: 'assets/logos/postgresql.svg' },
      { nombre: 'Scrum', logo: 'assets/logos/scrum.png' },
      { nombre: 'GitHub', logo: 'assets/logos/github.svg' },
      { nombre: 'Trello', logo: 'assets/logos/trello.png' },
      { nombre: 'VSCode', logo: 'assets/logos/vscode.svg' },
      { nombre: 'PrimeNg', logo: 'assets/logos/primeng.svg' },
      { nombre: 'AWS S3', logo: 'assets/logos/aws.svg' },
      { nombre: 'Docker', logo: 'assets/logos/docker.png' },
    ],
  },
  {
    nombre: 'CRED - Adulto Mayor',
    descripcion: `Sistema integral de gestión para el adulto mayor del municipio de Maní Casanare, permite tener control sobre lo relacionado con el adulto mayor, subsidios, actividades, entrega de mercados, etc.`,
    imagenes: [
      { nombre: 'Login', url: 'assets/proyectos/cred/inicio.png' },
      { nombre: 'Adultos', url: 'assets/proyectos/cred/adultos.png' },
      { nombre: 'Actividades', url: 'assets/proyectos/cred/actividades.png' },
      { nombre: 'Reportes', url: 'assets/proyectos/cred/reportes.png' },
    ],

    tecnologias: [
      { nombre: 'Angular', logo: 'assets/logos/angular.svg' },
      { nombre: 'Node.js', logo: 'assets/logos/node.png' },
      { nombre: 'HTML', logo: 'assets/logos/html5.svg' },
      { nombre: 'CSS', logo: 'assets/logos/css3.svg' },
      {
        nombre: 'PrimeNg primeras versiones',
        logo: 'assets/logos/primeng.svg',
      },
    ],
  },
  {
    nombre: 'SiisPlan',
    descripcion: `Sistema integral para planificación del plan de gobierno.`,
    imagenes: [{ nombre: 'login', url: 'assets/proyectos/siisplan/login.png' }],
    tecnologias: [
      { nombre: 'Angular', logo: 'assets/logos/angular.svg' },
      { nombre: 'Node.js', logo: 'assets/logos/node.png' },
      { nombre: 'HTML', logo: 'assets/logos/html5.svg' },
      { nombre: 'CSS', logo: 'assets/logos/css3.svg' },
      {
        nombre: 'PrimeNg primeras versiones',
        logo: 'assets/logos/primeng.svg',
      },
    ],
  },
];
