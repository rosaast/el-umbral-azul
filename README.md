# El umbral azul — entrega para Claude Code + GitHub + Vercel

Este proyecto contiene el ensayo digital completo, incluida una **portada de inicio** con el crédito «Rosa Astaburuaga | E02 | IAG como *motor* para diseñar», la composición azul animada, el botón «Entrar al ensayo», las ilustraciones hechas con CSS y el cursor cuadrado que cambia entre azul y blanco.

## Archivos

- `index.html`: contenido del ensayo y estructura de la web.
- `styles.css`: diseño, tipografías, animaciones y adaptación a pantallas móviles.
- `script.js`: indicador de lectura, pregunta interactiva y cursor personalizado.

Es una **web estática**: no necesita React, Next.js, dependencias, claves secretas ni proceso de compilación.

## Para usarlo con Claude Code

1. Descomprime este ZIP en una carpeta de tu computador.
2. Abre esa carpeta en tu editor o terminal con Claude Code.
3. Pega esta instrucción:

> Tengo un sitio web estático en esta carpeta llamado «El umbral azul». Quiero que lo subas a un repositorio nuevo de GitHub, preferentemente llamado `el-umbral-azul`, y que lo conectes con mi cuenta de Vercel para desplegarlo públicamente. Conserva exactamente el diseño, textos, la portada inicial con el nombre Rosa Astaburuaga y el curso E02 — IAG como *motor* para diseñar, animaciones, cursor azul/blanco, interacción final y funcionamiento móvil. No migres el sitio a otro framework salvo que sea imprescindible. Si tienes acceso a GitHub y Vercel, usa mis conexiones existentes y solicita mi autorización antes de crear o publicar recursos. En Vercel usa Framework Preset «Other», sin comando de build y sirviendo los archivos de la raíz del repositorio. Comprueba que `index.html`, `styles.css` y `script.js` cargan correctamente, que los enlaces funcionan y que el sitio tiene una URL pública. Al terminar, entrégame la URL pública de Vercel y la URL del repositorio de GitHub.

## Configuración de Vercel

Según la documentación de Vercel, para una web de solo HTML/CSS/JS:

- Framework Preset: `Other`.
- Build Command: sin comando (activar Override y dejarlo vacío si es necesario).
- Output Directory: raíz del proyecto (`.`), ya que `index.html` está en la raíz y no existe una carpeta `public`.
- Root Directory: raíz del repositorio.

Una vez importado el repositorio desde GitHub, Vercel puede desplegar automáticamente futuras actualizaciones de la rama de producción.

Documentación oficial: https://vercel.com/docs/builds/configure-a-build y https://vercel.com/docs/git

## Nota

Este paquete es una copia de exportación. La versión original publicada en ChatGPT Sites no se modifica al subir esta copia a GitHub o Vercel.
