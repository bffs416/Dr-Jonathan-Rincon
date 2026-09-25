# 🔒 GUÍA RÁPIDA DE REACTIVACIÓN (GEO / IA & SEO) TRAS RECIBIR EL PAGO

Este proyecto ha sido configurado con una **estratega de congelamiento/desindexación** para que ni los buscadores tradicionales (Google, Bing) ni los motores de Inteligencia Artificial (ChatGPT, Perplexity, Claude, Gemini) indexen o posicionen la web del Dr. Jonathan Rincón hasta que se realice el pago correspondiente.

Todo el código de posicionamiento premium en IA (JSON-LD Schema Medical, GEO Metatags, Speakable spec y llms.txt) **permanece intacto dentro del código**, pero bloqueado.

---

## 🚀 Pasos para reactivar la indexación en 30 segundos (Cuando pague el médico)

### Paso 1: En `index.html` (Línea ~9)
1. Modifica la etiqueta meta de robots:
   ```html
   <!-- DESACTIVAR / ELIMINAR ESTA LÍNEA: -->
   <meta name="robots" content="noindex, nofollow, noai, noimageai, nosnippet">

   <!-- ACTIVAR ESTA LÍNEA (Quita los comentarios): -->
   <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
   ```

2. **Descomentar el bloque de Schema JSON-LD** (Línea ~30 en `index.html`):
   Quita las marcas `<!--` al inicio y `-->` al final del bloque `<script type="application/ld+json">`.

---

### Paso 2: En `robots.txt`
Reemplaza todo el contenido de `robots.txt` por el siguiente bloque de permisos:

```txt
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: https://drjonathanrincon.com/sitemap.xml
```

---

### Paso 3: En `llms.txt`
En el archivo `llms.txt`, quita las marcas de comentario `<!--` y `-->` para permitir que las IA lean la ficha estructurada del Dr. Jonathan Rincón.

---

### 💡 ¿Por qué funciona este método?
- Ningún robot de Google ni de IA (ChatGPT, Claude, Perplexity) procesará la web mientras esté en `noindex` y `Disallow: /`.
- No perdiste ni 1 sola línea de código SEO/GEO.
- Una vez recibas el pago, solo cambias 2 archivos y en cuestión de días la IA comenzará a citar al Dr. Jonathan Rincón en las primeras posiciones.
