import { projects } from '/constants.js'

function displayProjects() {
    const projectContainer = document.querySelector('.items-container')
    projectContainer.innerHTML = ''

    projects.forEach((project) => {
        const projectElement = document.createElement('div')
        projectElement.classList.add('item')

        const projectImage = document.createElement('img')
        projectImage.src = project.image
        projectImage.classList.add('item-img')
        projectImage.alt = 'Item Icon'
        projectElement.appendChild(projectImage)

        const projectText = document.createElement('div')
        projectText.classList.add('item-text')

        const projectTitle = document.createElement('p')
        projectTitle.textContent = project.name
        projectTitle.classList.add('item-header')
        projectText.appendChild(projectTitle)

        const projectDescription = document.createElement('p')
        projectDescription.textContent = project.description
        projectDescription.classList.add('item-description')
        projectText.appendChild(projectDescription)

        projectElement.appendChild(projectText)

        projectContainer.appendChild(projectElement)
    })
}

window.onload = function () {
    displayProjects()
}
