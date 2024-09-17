import { displayMenu, toggleMenu } from './menu.js';
import { displayProjects } from './projects.js';
import { displayFooterLinks } from './footerLinks.js';
import { debounceSearch } from './search.js';

window.onload = function () {
    const searchInput = document.querySelector('.search-input');

    displayMenu();
    toggleMenu();
    displayProjects();
    displayFooterLinks();

    searchInput.addEventListener('input', () => debounceSearch());
};
