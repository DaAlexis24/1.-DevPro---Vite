import './style.css';
import { homePage } from '@/pages/home/home';
import { footer } from '@/components/footer/footer';

const setTemplate = () => {
  return `
    <main></main>
    <app-footer></app-footer>
  `;
};

const target = document.querySelector('#app');

if (target) {
  target.innerHTML = setTemplate();
}

homePage();
footer();
