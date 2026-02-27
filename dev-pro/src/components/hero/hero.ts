/*
Vanilla Component (Versión 2)
1. Función
2. Define un selector (custom element)
3. Define un template (string)
4. Crea un elemento HTML a partir del template
5. Agregamos lógica
4. Render template dentro del selector
  - appendChild (Web Component Style)
*/

import typescriptLogo from '@/assets/typescript.svg';
import viteLogo from '@/assets/vite.svg';

export const hero = () => {
  const selector = 'app-hero';
  const template =
    /*html*/
    `
  <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
  `;

  const element = document.createElement('div');
  element.innerHTML = template;

  const target = document.querySelector(selector);

  if (!target) {
    throw new Error(`No se encontró el ${selector}`);
  }

  target.replaceWith(element);
};
