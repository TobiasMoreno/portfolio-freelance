import { getWhatsAppUrl } from "@/data/site";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Consultar por WhatsApp"
    >
      <span>¿Hablamos?</span>
      <WhatsAppIcon />
    </a>
  );
}
