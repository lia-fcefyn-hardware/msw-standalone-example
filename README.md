# Demo MSW Página Estática

Esta es una demo de **MSW (Mock Service Worker)** en una página estática.
Docu de MSW 🫱 https://mswjs.io/

## Estructura

- `index.html` → Página principal que hace fetch a `/rand`.
- `mockServiceWorker.js` → Archivo generado por MSW.
- Opcional: `handlers.js` contiene las rutas, referirse a la documentación para agregar más.

## Requisitos
- Navegador moderno (Service Worker requiere HTTPS o `localhost`).
- Extensión live server de vscode https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer o node para correr la pagina con `npx serve .`

## Pasos para correr
Abrir el live server con vscode o correr `npx serve .`
