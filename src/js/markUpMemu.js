import menuData from '../menu.json';
import menuTemplate from '../templates/menu.hbs';

const menuContainer = document.querySelector('.js-menu');

menuContainer.innerHTML = menuTemplate(menuData);

