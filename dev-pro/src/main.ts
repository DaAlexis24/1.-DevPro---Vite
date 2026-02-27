import './style.css';
import { hero } from '@/components/hero/hero';
import { counter } from '@/components/counter/counter';

const setTemplate = () => {
  return `
  <div>
    <app-hero></app-hero>
    <app-counter></app-counter>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>`;
};

const target = document.querySelector('#app');

if (target) {
  target.innerHTML = setTemplate();
}

hero();
counter();
