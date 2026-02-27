import './style.css';
import { homePage } from '@/pages/home/home';
import { footer } from '@/components/footer/footer';

const setTemplate = () => {
  return `
  <div>
    <main></main>
    <app-footer></app-footer>
  </div>
  `;
};

const target = document.querySelector('#app');

if (target) {
  target.innerHTML = setTemplate();
}

homePage();
footer();
