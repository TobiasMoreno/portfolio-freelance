import { getEmailUrl, getWhatsAppUrl, navigation, siteConfig } from "@/data/site";
import { ArrowUpRightIcon } from "./Icons";

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.linkedin },
  { label: "GitHub", href: siteConfig.github },
  { label: "Email", href: getEmailUrl() },
  { label: "WhatsApp", href: getWhatsAppUrl() },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <a href="#inicio" className="brand"><span className="brand-mark">TM</span><span>{siteConfig.name}</span></a>
          <p>Desarrollo web</p>
          <span>{siteConfig.location}</span>
        </div>
        <div className="footer-column">
          <h3>Navegación</h3>
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </div>
        <div className="footer-column">
          <h3>Enlaces</h3>
          {socialLinks.map((item) => (
            <a key={item.label} href={item.href} target={item.label === "Email" ? undefined : "_blank"} rel="noreferrer">
              {item.label}<ArrowUpRightIcon />
            </a>
          ))}
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Tobias Moreno.</p>
        <p>Hecho con intención en Córdoba.</p>
      </div>
    </footer>
  );
}
