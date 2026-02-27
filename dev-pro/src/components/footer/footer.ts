/*
Vanilla Component (Versión 2)
1. Función
2. Define un selector (custom element)
3. Define un template (string)
4. Crea un elemento HTML a partir del template
5. Agregamos lógica
4. Render template dentro del selector
  - appendChild (Angular Style)
  - replaceWith (React Style)
*/

export const footer = () => {
  const selector = 'app-footer';
  const template = /*html*/ `
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  `;

  const element = document.createElement('footer');
  element.classList.add('footer');
  element.innerHTML = template;

  document.querySelector(selector)?.replaceWith(element);
};
