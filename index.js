import { projects, menu, footerLinks } from '/constants.js';

let items = [];
const searchInput = document.getElementById('search-input');
const noResults = document.querySelector('.no-results');

function filterItems(query) {
    let hasResults = false;
    items.forEach((item) => {
        const title = item.querySelector('.item-header').textContent.toLowerCase();
        const description = item.querySelector('.item-text').textContent.toLowerCase();

        if (title.includes(query) || description.includes(query)) {
            item.classList.remove('hidden');
            hasResults = true;
        } else {
            item.classList.add('hidden');
        }
    });

    noResults.style.display = hasResults ? 'none' : 'block';
}

let searchTimeout;
searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
        const query = searchInput.value.toLowerCase().trim();
        filterItems(query);
    }, 300);
});

function displayMenu() {
    const menuContainer = document.querySelector('.menu');

    menu.forEach((item) => {
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
            additionalPoint.classList.add('dropdown-item');
            additionalPoint.classList.add('dropdown-item--spacing');
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

            menuElement.appendChild(menuSubpoints);
        }

        menuElement.appendChild(menuSubpoints);

        menuContainer.appendChild(menuElement);
    });

    const themeSwitcherContainer = document.createElement('li');
    themeSwitcherContainer.classList.add('menu-item');

    const themeSwitcher = document.createElement('div');
    themeSwitcher.classList.add('theme-switcher');

    const themeSwitcherInput = document.createElement('input');
    themeSwitcherInput.type = 'checkbox';
    themeSwitcherInput.id = 'switch';
    themeSwitcherInput.classList = 'switch-input';
    themeSwitcher.appendChild(themeSwitcherInput);

    const themeSwitcherLabel = document.createElement('label');
    themeSwitcherLabel.setAttribute('for', 'switch');
    themeSwitcherLabel.classList.add('switch-label');

    const themeSwitcherIcon = document.createElement('span');
    themeSwitcherIcon.classList.add('switch-icon');
    themeSwitcherLabel.appendChild(themeSwitcherIcon);

    themeSwitcher.appendChild(themeSwitcherLabel);

    themeSwitcherContainer.appendChild(themeSwitcher);

    menuContainer.appendChild(themeSwitcherContainer);

    document.querySelectorAll('.menu-link').forEach((link) => {
        link.addEventListener('click', function () {
            const item = this.parentElement;

            document.querySelectorAll('.menu-item').forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            item.classList.toggle('active');
        });
    });
}

function toggleMenu() {
    const menuContainer = document.querySelector('.menu');
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.addEventListener('click', () => {
        menuContainer.classList.toggle('open');
        menuIcon.classList.toggle('open');
    });
}

function displayProjects() {
    const projectContainer = document.querySelector('.items-container');

    projects.forEach((project) => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('item');

        const projectImage = document.createElement('img');
        projectImage.src = project.image;
        projectImage.classList.add('item-img');
        projectImage.alt = 'Item Icon';
        projectElement.appendChild(projectImage);

        const projectText = document.createElement('div');
        projectText.classList.add('item-text');

        const projectTitle = document.createElement('p');
        projectTitle.textContent = project.name;
        projectTitle.classList.add('item-header');
        projectText.appendChild(projectTitle);

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        projectDescription.classList.add('item-description');
        projectText.appendChild(projectDescription);

        projectElement.appendChild(projectText);

        projectContainer.appendChild(projectElement);
    });

    items = document.querySelectorAll('.item');
}

function displayFooterLinks() {
    const linksContainer = document.querySelector('.links-container');

    footerLinks.forEach((linkList) => {
        const linksWrapper = document.createElement('div');
        linksWrapper.classList.add('links-wrapper');

        linkList.forEach((links) => {
            const list = document.createElement('ul');
            list.classList.add('links');

            links.forEach((linkInfo) => {
                const linkItem = document.createElement('li');
                linkItem.classList.add('link-item');

                const link = document.createElement('a');
                link.classList.add('link');
                link.href = '#';
                link.textContent = linkInfo.name;

                if (linkInfo.bold === true) {
                    link.classList.add('link--bold');
                }

                linkItem.appendChild(link);

                list.appendChild(linkItem);
            });

            linksWrapper.appendChild(list);
        });

        linksContainer.appendChild(linksWrapper);
    });
}

window.onload = function () {
    displayMenu();
    toggleMenu();
    displayProjects();
    displayFooterLinks();
};
