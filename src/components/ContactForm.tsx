"use client";

import { useState, type FormEvent, type MouseEvent } from "react";
import { getWhatsAppUrl, siteConfig } from "@/data/site";
import { ArrowUpRightIcon, CheckIcon, MailIcon, WhatsAppIcon } from "./Icons";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;

    if (!emailInput.value.trim()) {
      emailInput.setCustomValidity("Ingresá tu email para enviar la consulta por este medio.");
      emailInput.reportValidity();
      return;
    }

    emailInput.setCustomValidity("");
    setStatus("sending");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("No se pudo enviar el formulario");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function handleWhatsApp(event: MouseEvent<HTMLButtonElement>) {
    const form = event.currentTarget.form;
    if (!form) return;

    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    emailInput.setCustomValidity("");
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const emailLine = email ? `\nMi email es ${email}.` : "";
    const whatsAppMessage = `Hola Tobias! Soy ${name}.${emailLine}\n\n${message}`;

    window.open(getWhatsAppUrl(whatsAppMessage), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      className="contact-form"
      action={siteConfig.formspreeEndpoint}
      method="POST"
      onSubmit={handleSubmit}
      onChange={() => status !== "idle" && setStatus("idle")}
    >
      <input type="hidden" name="_subject" value="Nueva consulta desde tu portfolio" />
      <input
        className="form-honeypot"
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="form-field">
        <label htmlFor="contact-name">Nombre</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          placeholder="¿Cómo te llamás?"
          autoComplete="name"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="contact-email">Email <span>(solo si enviás por email)</span></label>
        <input
          id="contact-email"
          name="email"
          type="email"
          placeholder="tu@email.com"
          autoComplete="email"
          onChange={(event) => event.currentTarget.setCustomValidity("")}
        />
      </div>

      <div className="form-field form-field--message">
        <label htmlFor="contact-message">¿En qué te puedo ayudar?</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Contame brevemente sobre tu negocio o idea..."
          rows={5}
          required
        />
      </div>

      <div className="contact-form-actions">
        <button
          className="button button--accent button--large contact-submit"
          type="submit"
          disabled={status === "sending"}
        >
          <MailIcon />
          {status === "sending"
            ? "Enviando..."
            : status === "success"
              ? "Email enviado"
              : "Enviar por email"}
          {status === "success" ? <CheckIcon /> : <ArrowUpRightIcon />}
        </button>

        <button
          className="button button--whatsapp button--large contact-submit"
          type="button"
          onClick={handleWhatsApp}
        >
          <WhatsAppIcon />
          Enviar por WhatsApp
          <ArrowUpRightIcon />
        </button>
      </div>

      <div className="form-feedback" aria-live="polite">
        {status === "success" && (
          <p className="form-feedback--success">
            <CheckIcon /> ¡Gracias! Tu mensaje fue enviado. Te respondo a la brevedad.
          </p>
        )}
        {status === "error" && (
          <p className="form-feedback--error">
            Hubo un problema al enviar. Probá de nuevo o escribime por WhatsApp.
          </p>
        )}
      </div>
    </form>
  );
}
