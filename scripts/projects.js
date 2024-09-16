import { PROJECTS } from './constants.js';

export function createProjectElement(project) {
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
    return projectElement;
}

export function displayProjects() {
    const projectContainer = document.querySelector('.items-container');
    const fragment = document.createDocumentFragment();

    PROJECTS.forEach((project) => {
        const projectElement = createProjectElement(project);
        fragment.appendChild(projectElement);
    });

    projectContainer.appendChild(fragment);
}
