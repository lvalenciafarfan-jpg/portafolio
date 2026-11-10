// ============================================================
//  TODO EL CONTENIDO DEL PORTAFOLIO VIVE AQUÍ
//  Edita este archivo y la página se actualiza sola.
// ============================================================

export const profile = {
  name: 'Luis Santiago Valencia',
  firstName: 'Luis Santiago',
  role: 'Desarrollador de backend',
  headline:
    'Desarrollador Backend apasionado por crear soluciones escalables, seguras y eficientes.',
  // 👇 DATOS DE CONTACTO Y FOTO (cámbialos por los tuyos)
  email: 'lvalenciafarfan@gmail.com',
  github: 'https://github.com/lvalenciafarfan-jpg',
  linkedin: 'https://www.linkedin.com/in/luis-santiago-valencia-farfán-4a4332366',
  // WhatsApp: número con código de país y SIN "+" ni espacios (ej. 573001234567)
  whatsapp: '573144602762',
  whatsappLabel: '+57 314 460 2762', // cómo se muestra en pantalla
  // Foto de "Sobre mí": guarda la imagen en /public (ej. public/foto.jpg) y pon '/foto.jpg'.
  // Si lo dejas vacío se muestran tus iniciales.
  photo: '/foto.jpg',
}

export const heroStack = ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Git', 'AWS']

export const highlights = [
  { icon: '⚡', title: 'Rendimiento', text: 'Código optimizado para máximo rendimiento.' },
  { icon: '🛡️', title: 'Seguridad', text: 'Buenas prácticas y arquitectura segura.' },
  { icon: '🧩', title: 'Escalabilidad', text: 'Soluciones listas para crecer contigo.' },
  { icon: '🤝', title: 'Trabajo en equipo', text: 'Colaboración y comunicación efectiva.' },
]

export const about = {
  title: 'Conoce un poco sobre mí.',
  paragraphs: [
    'Soy Luis Santiago Valencia, desarrollador Backend enfocado en la construcción de aplicaciones robustas, escalables y seguras.',
    'Me interesa el diseño de arquitecturas de software, el desarrollo de APIs REST, la gestión de bases de datos y la implementación de soluciones eficientes.',
    'Me gusta aprender nuevas tecnologías, enfrentar desafíos técnicos y transformar ideas en soluciones funcionales.',
  ],
  cards: [
    {
      icon: '🎯',
      title: 'Enfoque profesional',
      text: 'Backend con Java y Spring Boot: APIs REST limpias, bien documentadas y fáciles de mantener.',
    },
    {
      icon: '💡',
      title: 'Intereses',
      text: 'Arquitectura de software, seguridad, modelado de bases de datos y buenas prácticas de código.',
    },
    {
      icon: '🎓',
      title: 'Formación',
      text: 'Formación en desarrollo de software y aprendizaje continuo a través de proyectos propios.',
    },
  ],
}

// Para el icono se usa la librería Devicon (se carga por CDN).
// level = porcentaje de la barra (0-100). Cámbialo con total libertad.
export const techCategories = [
  {
    id: 'backend',
    title: 'Backend',
    description: 'Mi especialidad: lo que uso a diario para construir servicios.',
    learning: false,
    items: [
      { name: 'Java', icon: 'java/java-original.svg', level: 90, label: 'Avanzado' },
      { name: 'Spring Boot', icon: 'spring/spring-original.svg', level: 88, label: 'Avanzado' },
      { name: 'Spring Security', icon: 'spring/spring-original.svg', level: 75, label: 'Intermedio' },
      { name: 'Hibernate / JPA', icon: 'hibernate/hibernate-original.svg', level: 82, label: 'Avanzado' },
    ],
  },
  {
    id: 'bases-de-datos',
    title: 'Bases de datos',
    description: 'Modelado, consultas y persistencia de datos.',
    learning: false,
    items: [
      { name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg', level: 85, label: 'Avanzado' },
      { name: 'MySQL', icon: 'mysql/mysql-original.svg', level: 75, label: 'Intermedio' },
    ],
  },
  {
    id: 'herramientas',
    title: 'Herramientas',
    description: 'Flujo de trabajo, pruebas y construcción de proyectos.',
    learning: false,
    items: [
      { name: 'Git y GitHub', icon: 'git/git-original.svg', level: 85, label: 'Avanzado' },
      { name: 'Docker', icon: 'docker/docker-original.svg', level: 75, label: 'Intermedio' },
      { name: 'Postman', icon: 'postman/postman-original.svg', level: 85, label: 'Avanzado' },
      { name: 'Maven', icon: 'maven/maven-original.svg', level: 80, label: 'Avanzado' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud y despliegue',
    description: 'Poner las aplicaciones en producción.',
    learning: false,
    items: [
      { name: 'AWS', icon: 'amazonwebservices/amazonwebservices-original-wordmark.svg', level: 60, label: 'Intermedio' },
      { name: 'Linux', icon: 'linux/linux-original.svg', level: 75, label: 'Intermedio' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'En proceso de aprendizaje: lo estoy practicando con proyectos como este portafolio.',
    learning: true,
    items: [
      { name: 'React', icon: 'react/react-original.svg', level: 40, label: 'Aprendiendo' },
      { name: 'JavaScript', icon: 'javascript/javascript-original.svg', level: 45, label: 'Aprendiendo' },
      { name: 'HTML', icon: 'html5/html5-original.svg', level: 55, label: 'Aprendiendo' },
      { name: 'CSS', icon: 'css3/css3-original.svg', level: 50, label: 'Aprendiendo' },
    ],
  },
]

export const specialties = [
  { icon: '🔌', title: 'Desarrollo de APIs', text: 'Diseño e implementación de servicios RESTful.' },
  { icon: '🗄️', title: 'Bases de datos', text: 'Modelado, consultas y optimización de datos.' },
  { icon: '🔐', title: 'Seguridad', text: 'Autenticación, autorización y protección de aplicaciones.' },
  { icon: '🏛️', title: 'Arquitectura', text: 'Código organizado, mantenible y escalable.' },
]

// ------------------------------------------------------------
//  PROYECTOS
//  image  -> captura del proyecto. Guárdala en /public/projects/ y pon la ruta
//            (ej. '/projects/restaurante.png'). Si no existe, se ve el degradado.
//  status -> etiqueta pequeña sobre la tarjeta (ej. 'Desplegado'). '' para ocultarla.
//  demo   -> '' oculta el botón "Demo".
//  note   -> texto opcional en la página de detalle.
// ------------------------------------------------------------
export const projects = [
  {
    slug: 'jf-restaurant-sistem',
    title: 'JF Restaurant System',
    example: false,
    status: 'Desplegado',
    image: '/projects/restaurante.png',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'Docker'],
    gradient: 'linear-gradient(135deg, #5a1ee8 0%, #8b5cf6 55%, #c4b5fd 100%)',
    summary:
      'Plataforma web para gestión y reservas de restaurantes: menú digital, pedidos a domicilio, reserva de mesas, reseñas y panel de administración.',
    features: [
      'Autenticación con Spring Security + JWT y rutas protegidas por rol.',
      'Menú digital: CRUD de productos y categorías.',
      'Pedidos a domicilio con historial, cambio de estado y cancelación.',
      'Reserva de mesas con validación de solapamiento y liberación automática por tiempo.',
      'Reseñas con calificación de 1 a 5 y promedio general.',
      'Panel de administración: empleados, usuarios y roles.',
    ],
    architecture: [
      { layer: 'Backend', text: 'API REST en Spring Boot 4 (Java 25) con Spring Security y JWT.' },
      { layer: 'Frontend', text: 'Interfaz en React, Vite y CSS.' },
      { layer: 'Base de datos', text: 'PostgreSQL alojado en Neon.' },
      { layer: 'Despliegue', text: 'Vercel (frontend) y Render con Docker (backend).' },
    ],
    decisions: [
      'Credenciales y secretos en variables de entorno (DB_URL, JWT_SECRET, CORS_ORIGINS), nunca en el código.',
      'Rutas protegidas por rol; un administrador puede promover a otros usuarios.',
      'Manejo global de excepciones personalizadas.',
      'Documentación interactiva con Swagger / OpenAPI y colección de Postman.',
      'Configuración del restaurante centralizada en un solo archivo del frontend.',
    ],
    endpoints: [],
    note:
      'El backend (diseño de la API, seguridad y reglas de negocio) lo desarrollé yo. El frontend lo construí con ayuda de un agente de IA (Claude) y lo estoy estudiando y ajustando mientras avanzo hacia full stack. El backend corre en un plan gratuito: si estaba inactivo, la primera carga puede tardar hasta un minuto.',
    repo: 'https://github.com/lvalenciafarfan-jpg/JFRestaurantSistem',
    demo: 'https://jf-restaurant-sistem-front.vercel.app',
  },
  {
    slug: 'sistema-reservas-canchas',
    title: 'Sistema de Reservas de Canchas',
    example: false,
    status: '',
    image: '',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Maven'],
    gradient: 'linear-gradient(135deg, #0f0f14 0%, #3b1a9c 60%, #5a1ee8 100%)',
    summary:
      'API REST para gestión de reservas de canchas deportivas, construida con Spring Boot y PostgreSQL.',
    features: [
      'CRUD de usuarios, canchas y reservas.',
      'Autenticación y autorización con Spring Security + JWT.',
      'Validación de conflictos de horario en las reservas.',
      'Manejo global de errores con @RestControllerAdvice.',
      'Validaciones en DTOs con @Valid.',
      'Pruebas unitarias (en progreso).',
    ],
    architecture: [
      { layer: 'Controller', text: 'Recibe las peticiones HTTP.' },
      { layer: 'Service', text: 'Lógica de negocio.' },
      { layer: 'Repository', text: 'Acceso a datos con Spring Data JPA / Hibernate.' },
      { layer: 'DTOs', text: 'Separación entre las capas y la API.' },
    ],
    decisions: [
      'Arquitectura por capas para separar responsabilidades.',
      'DTOs para no exponer las entidades directamente.',
      'JWT para autenticación sin estado.',
      'Errores centralizados con @RestControllerAdvice.',
      'Validación de conflictos de horario antes de confirmar cada reserva.',
    ],
    endpoints: [
      { method: 'POST', path: '/auth/registro', desc: 'Registrar nuevo usuario' },
      { method: 'POST', path: '/auth/login', desc: 'Login: devuelve token JWT' },
      { method: 'GET', path: '/usuarios', desc: 'Listar todos' },
      { method: 'GET', path: '/usuarios/{id}', desc: 'Buscar por ID' },
      { method: 'PUT', path: '/usuarios/{id}/activar', desc: 'Activar usuario' },
      { method: 'PUT', path: '/usuarios/{id}/desactivar', desc: 'Desactivar usuario' },
      { method: 'GET', path: '/canchas', desc: 'Listar todas' },
      { method: 'GET', path: '/canchas/{id}', desc: 'Buscar por ID' },
      { method: 'POST', path: '/canchas', desc: 'Crear cancha' },
      { method: 'PUT', path: '/canchas/{id}/precio', desc: 'Actualizar precio' },
      { method: 'PUT', path: '/canchas/{id}/disponibilidad', desc: 'Cambiar disponibilidad' },
      { method: 'GET', path: '/reservas', desc: 'Listar todas' },
      { method: 'GET', path: '/reservas/{id}', desc: 'Buscar por ID' },
      { method: 'POST', path: '/reservas', desc: 'Crear reserva' },
      { method: 'PUT', path: '/reservas/{id}/cancelar', desc: 'Cancelar reserva' },
    ],
    note: '',
    repo: 'https://github.com/lvalenciafarfan-jpg/spring-boot-SRC',
    demo: '',
  },
  {
    slug: 'portafolio-personal',
    title: 'Portafolio personal',
    example: false,
    status: '',
    image: '',
    stack: ['React', 'JavaScript', 'CSS', 'Vite'],
    gradient: 'linear-gradient(135deg, #19c3c3 0%, #5a1ee8 100%)',
    summary:
      'Este mismo sitio: mi primer proyecto serio de frontend, hecho para practicar React mientras aprendo.',
    features: [
      'Vistas separadas con React Router.',
      'Diseño responsive para móvil y escritorio.',
      'Contenido centralizado en un solo archivo de datos.',
      'Componentes reutilizables.',
    ],
    architecture: [
      { layer: 'pages/', text: 'Una vista por ruta (Inicio, Proyectos, Contacto…).' },
      { layer: 'components/', text: 'Piezas reutilizables: tarjetas, navbar, footer.' },
      { layer: 'data/', text: 'Todo el contenido en un único archivo.' },
    ],
    decisions: [
      'Vite como herramienta de desarrollo por su rapidez.',
      'CSS propio con variables, sin librerías de estilos, para aprender los fundamentos.',
      'Contenido separado del diseño para poder actualizarlo fácilmente.',
    ],
    endpoints: [],
    note: '',
    repo: 'https://github.com/lvalenciafarfan-jpg/portafolio',
    demo: '',
  },
]

export const education = [
  {
    period: '2025 – Actualidad',
    title: 'Ingeniería de Sistemas',
    place: 'Universidad del Tolima',
    text: 'Formación en ingeniería de sistemas, con énfasis personal en desarrollo backend con Java y Spring Boot.',
  },
  {
    period: 'Backend',
    title: 'Desarrollo Backend',
    place: 'Autodidacta · Proyectos',
    text: 'Aprendizaje de Java y Spring Boot construyendo APIs REST con arquitectura por capas.',
  },
  {
    period: 'Datos',
    title: 'Bases de datos',
    place: 'Proyectos personales',
    text: 'Desarrollo de soluciones con PostgreSQL y MySQL: modelado, consultas y persistencia con JPA.',
  },
  {
    period: 'Práctica',
    title: 'Proyectos personales',
    place: 'GitHub',
    text: 'Aplicaciones desarrolladas para fortalecer mis conocimientos y demostrar lo que sé hacer.',
  },
]

export const learningNow = [
  { name: 'React', text: 'Componentes, hooks y enrutamiento.' },
  { name: 'JavaScript', text: 'Fundamentos del lenguaje y manejo del DOM.' },
  { name: 'HTML', text: 'Maquetación semántica y accesible.' },
  { name: 'CSS', text: 'Flexbox, Grid y diseño responsive.' },
]
