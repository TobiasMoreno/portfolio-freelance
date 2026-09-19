# Portfolio freelance — Tobias Moreno

Landing page de una sola página creada con Next.js, TypeScript y Tailwind CSS. Todo el contenido importante se modifica desde archivos locales; no usa backend, base de datos ni CMS.

## Ejecutar el proyecto

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000). Para comprobar la versión de producción usá `npm run build`.

## Antes de publicar

1. **Datos y enlaces:** editá `src/data/site.ts`. Reemplazá el WhatsApp (código de país y área, sin `+`, espacios ni guiones), email, LinkedIn, GitHub y dominio.
2. **Proyectos:** editá `src/data/projects.ts`. Del Castelar y Pupila ya están cargados. Para sumar otro proyecto, agregá un nuevo objeto al array `projects`.
3. **Screenshots:** si querés actualizar las capturas, reemplazá sin cambiar el nombre:
   - `public/projects/project-01/desktop.webp` y `mobile.webp`
   - `public/projects/project-02/desktop.webp` y `mobile.webp`
   - Usá capturas desktop de aproximadamente 1600×1000 y mobile de 450×900.
4. **Foto personal:** la imagen actual está en `public/images/tobias.jpg`. Podés reemplazarla manteniendo el mismo nombre.
5. **SEO:** el título y la descripción están en `src/data/site.ts`. Al colocar el dominio real se actualizan canonical, sitemap, robots y Open Graph.

Si necesitás regenerar los placeholders originales, ejecutá `node scripts/generate-placeholders.mjs`.

## Deploy

El proyecto funciona directamente en Vercel y también puede desplegarse en Netlify. Para Firebase Hosting se puede usar su integración con Next.js o exportación estática si no se necesitan las rutas dinámicas de metadata.
