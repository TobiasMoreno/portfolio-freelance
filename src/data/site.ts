/**
 * EDITAR: reemplazá el dominio cuando definas la URL final del portfolio.
 * El número de WhatsApp debe llevar código de país y área, sin +, espacios ni guiones.
 */
export const siteConfig = {
  name: "Tobias Moreno",
  title: "Tobias Moreno | Desarrollo Web",
  description:
    "Desarrollo páginas web modernas para negocios, emprendimientos y profesionales. Diseño responsive, WhatsApp, catálogos y soluciones personalizadas.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://YOUR-FIREBASE-PROJECT.web.app",
  location: "Córdoba, Argentina",
  whatsapp: "5493512552929",
  email: "tobiasmoreno.tm.21@gmail.com",
  linkedin: "https://www.linkedin.com/in/tobiasmoreno/",
  github: "https://github.com/TobiasMoreno",
  whatsappMessage:
    "Hola Tobias! Estuve viendo tu portfolio y quería consultarte por una página web para mi negocio.",
} as const;

export const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Trabajos", href: "#trabajos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
] as const;

export function getWhatsAppUrl(message = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function getEmailUrl() {
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent("Consulta por desarrollo web")}`;
}
