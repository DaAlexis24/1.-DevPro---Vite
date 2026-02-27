import './style.css';
import { homePage } from '@/pages/home/home';
import { footer } from '@/components/footer/footer';
import { header } from './components/header/header';

const setTemplate = () => {
  return `
    <app-header></app-header>
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
header();
