/*
Vanilla Component
1. Función
2. Define un selector (custom element)
3. Define un template (string)
4. Render template dentro del selector
  - innerHTML (Angular style, manteniendo el nombre del selector)
  - outerHTML (React style, sustituyendo el nombre del selector) 
5. Agregamos lógica (eventos, etc.)
*/

import './counter.css';

export const counter = () => {
  const selector = 'app-counter';
  const template =
    /*html*/
    ` 
    <div class="card-counter">
      <button id="counter" type="button">The counter is 0</button>
    </div>
  `;

  const target = document.querySelector(selector);

  if (!target) {
    throw new Error(`No se encontró el ${template}`);
  }

  target.outerHTML = template;

  let counter = 0;
  const element = document.querySelector('#counter');
  element?.addEventListener('click', () => {
    counter++;
    element.innerHTML = `The counter is ${counter}`;
  });
};
