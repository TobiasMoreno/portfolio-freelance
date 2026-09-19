# Portfolio freelance — Tobias Moreno

Landing page de una sola página creada con Next.js, TypeScript y Tailwind CSS. Todo el contenido importante se modifica desde archivos locales; no usa backend, base de datos ni CMS.

## Ejecutar el proyecto

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000). Para comprobar la versión de producción usá `npm run build`; el sitio estático se genera en `out/`.

## Antes de publicar

1. **Datos y enlaces:** editá `src/data/site.ts`. Reemplazá el WhatsApp (código de país y área, sin `+`, espacios ni guiones), email, LinkedIn, GitHub, dominio y endpoint de Formspree si fuera necesario.
2. **Proyectos:** editá `src/data/projects.ts`. Del Castelar y Pupila ya están cargados. Para sumar otro proyecto, agregá un nuevo objeto al array `projects`.
3. **Screenshots:** si querés actualizar las capturas, reemplazá sin cambiar el nombre:
   - `public/projects/project-01/desktop.webp` y `mobile.webp`
   - `public/projects/project-02/desktop.webp` y `mobile.webp`
   - Usá capturas desktop de aproximadamente 1600×1000 y mobile de 450×900.
4. **Foto personal:** la imagen actual está en `public/images/tobias.jpg`. Podés reemplazarla manteniendo el mismo nombre.
5. **SEO y URL:** el título y la descripción están en `src/data/site.ts`. Definí `NEXT_PUBLIC_SITE_URL` en `.env.local` para actualizar canonical, sitemap, robots y Open Graph.

Si necesitás regenerar los placeholders originales, ejecutá `node scripts/generate-placeholders.mjs`.

## Deploy en Firebase Hosting

El proyecto está configurado como exportación estática de Next.js: no crea Functions, Cloud Run ni ningún backend.

1. Creá el proyecto desde [Firebase Console](https://console.firebase.google.com/).
2. Iniciá sesión desde esta carpeta:

   ```bash
   npm run firebase:login
   ```

3. Asociá el repositorio con el proyecto y elegí el alias `default`:

   ```bash
   npm run firebase:use
   ```

4. Creá `.env.local` tomando `.env.example` como referencia y colocá la URL pública, por ejemplo:

   ```env
   NEXT_PUBLIC_SITE_URL=https://tu-proyecto.web.app
   ```

5. Publicá el sitio:

   ```bash
   npm run deploy:firebase
   ```

Para probar exactamente la versión exportada antes de publicar:

```bash
npm run preview:firebase
```

Cuando conectes un dominio propio, reemplazá `NEXT_PUBLIC_SITE_URL` por la URL final y volvé a ejecutar el deploy.

## Deploy automático desde GitHub

El workflow `.github/workflows/deploy-firebase.yml` ejecuta lint, genera la exportación estática y publica el canal `live` de Firebase Hosting con cada push a `main`. También se puede ejecutar manualmente desde la pestaña **Actions**.

En GitHub, entrá a **Settings → Secrets and variables → Actions** y configurá:

### Variables

- `FIREBASE_PROJECT_ID`: ID exacto del proyecto de Firebase, por ejemplo `portfolio-tobias`.
- `SITE_URL`: URL pública completa y sin barra final, por ejemplo `https://portfolio-tobias.web.app`.

### Secret

- `FIREBASE_SERVICE_ACCOUNT`: contenido completo del archivo JSON de una cuenta de servicio con acceso a Firebase Hosting.

Firebase puede crear y registrar esa cuenta automáticamente mediante `firebase init hosting:github`. Si usás ese asistente, conservá `deploy-firebase.yml` como único workflow de producción y verificá que el nombre del secret generado coincida con `FIREBASE_SERVICE_ACCOUNT`.

Una vez configurados esos tres valores, cada push a `main` se publica automáticamente. Ninguna credencial debe guardarse en archivos del repositorio.
