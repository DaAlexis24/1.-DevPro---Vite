export const header = () => {
  const selector = 'app-header';
  const template = /*html*/ `
    <nav>
      <a href="/">Home</a>
      <a href="/contact">Contact</a>
      <a href="/about.html">About</a>
    </nav>
  `;

  const element = document.createElement('header');
  element.innerHTML = template;

  document.querySelector(selector)?.replaceWith(element);
};
