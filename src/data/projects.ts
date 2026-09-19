export type Project = {
  title: string;
  client: string;
  description: string;
  desktopImage: string;
  mobileImage: string;
  imageAlt: string;
  url: string;
  services: string[];
  challenge: string;
  solution: string;
};

/**
 * Para sumar un tercer trabajo, copiá uno de los objetos y actualizá sus datos.
 */
export const projects: Project[] = [
  {
    title: "Del Castelar",
    client: "Del Castelar · Panadería en Córdoba",
    description:
      "Una presencia digital cálida y profesional que lleva la experiencia de la panadería a internet y facilita cada visita al local.",
    desktopImage: "/projects/project-01/desktop.webp",
    mobileImage: "/projects/project-01/mobile.webp",
    imageAlt: "Sitio web de la panadería Del Castelar",
    url: "https://panaderia-del-castelar.web.app/",
    services: [
      "Diseño personalizado",
      "Catálogo de productos",
      "Integración WhatsApp",
      "Google Maps",
      "Horarios y ubicación",
      "SEO básico",
      "Hosting y publicación",
    ],
    challenge:
      "La panadería necesitaba una presencia online a la altura de su identidad, donde sus clientes pudieran conocer la propuesta y encontrar rápidamente la información del local.",
    solution:
      "Diseñé una experiencia visual centrada en sus productos y su espacio, con catálogo, horarios, mapa, redes y accesos directos para consultar o llegar al local.",
  },
  {
    title: "Pupila Centro Óptico",
    client: "Pupila · Óptica boutique en Córdoba",
    description:
      "Un catálogo digital con identidad propia, pensado para descubrir modelos y convertir el interés en una consulta directa.",
    desktopImage: "/projects/project-02/desktop.webp",
    mobileImage: "/projects/project-02/mobile.webp",
    imageAlt: "Sitio web de Pupila Centro Óptico",
    url: "https://pupila-optical-center.web.app/",
    services: [
      "Catálogo online",
      "Diseño personalizado",
      "Filtros por categoría",
      "Consultas por WhatsApp",
      "Preguntas frecuentes",
      "Asistente de consultas",
      "SEO básico",
      "Hosting y deploy",
    ],
    challenge:
      "La óptica necesitaba mostrar su selección de anteojos con una imagen diferenciada y simplificar las consultas sobre modelos, disponibilidad y atención.",
    solution:
      "Construí un catálogo responsive con categorías y fichas de producto, acompañado por preguntas frecuentes, asesoramiento guiado y contacto directo por WhatsApp.",
  },
];
