import { counter } from '@/pages/home/counter/counter';
import { footer } from '@/pages/home/footer/footer';
import { hero } from '@/pages/home/hero/hero';

export const homePage = () => {
  const setTemplate = () => {
    return `
  <section class="home">
    <app-hero></app-hero>
    <app-counter></app-counter>
    <app-home-footer></app-home-footer>
  </section>`;
  };

  const target = document.querySelector('main');

  if (target) {
    target.innerHTML = setTemplate();
  }

  hero();
  counter();
  footer();
};
