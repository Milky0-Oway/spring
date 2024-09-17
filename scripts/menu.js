import { MENU } from './constants.js';
import { createThemeSwitcher } from './themeSwitcher.js';

export function createMenuItem(item) {
    const menuElement = document.createElement('li');
    menuElement.classList.add('menu-item');

    const menuPoint = document.createElement('a');
    menuPoint.href = '#';
    menuPoint.classList.add('menu-link');
    menuPoint.textContent = item.point;
    menuElement.appendChild(menuPoint);

    const menuSubpoints = document.createElement('ul');
    menuSubpoints.classList.add('dropdown');

    item.subpoints.forEach((subpoint) => {
        const menuSubpoint = document.createElement('li');
        menuSubpoint.classList.add('dropdown-item');

        const menuSubpointLink = document.createElement('a');
        menuSubpointLink.href = '#';
        menuSubpointLink.classList.add('dropdown-link');
        menuSubpointLink.textContent = subpoint;

        menuSubpoint.appendChild(menuSubpointLink);
        menuSubpoints.appendChild(menuSubpoint);
    });

    if (item.additional === true) {
        const menuLastItem = menuSubpoints.lastChild.lastChild;
        menuLastItem.classList.add('link-secondary');

        const additionalPoint = document.createElement('li');
        additionalPoint.classList.add('dropdown-item', 'dropdown-item--spacing');
        additionalPoint.textContent = item.additionalPoint;
        menuSubpoints.appendChild(additionalPoint);

        item.additionalSubpoints.forEach((subpoint) => {
            const menuSubpoint = document.createElement('li');
            menuSubpoint.classList.add('dropdown-item');

            const menuSubpointLink = document.createElement('a');
            menuSubpointLink.href = '#';
            menuSubpointLink.classList.add('dropdown-link');
            menuSubpointLink.textContent = subpoint;

            menuSubpoint.appendChild(menuSubpointLink);
            menuSubpoints.appendChild(menuSubpoint);
        });
    }

    menuElement.appendChild(menuSubpoints);

    menuElement.addEventListener('mouseenter', () => {
        menuElement.querySelector('.dropdown').classList.add('dropdown--active');
    });

    menuElement.addEventListener('mouseleave', () => {
        menuElement.querySelector('.dropdown').classList.remove('dropdown--active');
    });

    return menuElement;
}

export function displayMenu() {
    const menuContainer = document.querySelector('.menu');
    const fragment = document.createDocumentFragment();

    MENU.forEach((item) => {
        const menuElement = createMenuItem(item);
        fragment.appendChild(menuElement);
    });

    createThemeSwitcher(fragment);

    menuContainer.appendChild(fragment);

    menuContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('menu-link')) {
            const item = e.target.parentElement.querySelector('.dropdown');

            document.querySelectorAll('.menu-link--active').forEach((link) => {
                if (e.target !== link) {
                    link.classList.remove('menu-link--active');
                }
            });

            e.target.classList.toggle('menu-link--active');

            document.querySelectorAll('.dropdown').forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove('dropdown-mobile--active');
                }
            });
            item.classList.toggle('dropdown-mobile--active');
        }
    });
}

export function toggleMenu() {
    const menuContainer = document.querySelector('.menu');
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.addEventListener('click', () => {
        menuContainer.classList.toggle('menu--open');
        menuIcon.classList.toggle('menu-icon--open');
    });
}
