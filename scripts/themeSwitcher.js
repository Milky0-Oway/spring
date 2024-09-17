export function createThemeSwitcher(container) {
    const themeSwitcherContainer = document.createElement('li');
    themeSwitcherContainer.classList.add('menu-item');

    const themeSwitcher = document.createElement('div');
    themeSwitcher.classList.add('theme-switcher');

    const themeSwitcherInput = document.createElement('input');
    themeSwitcherInput.type = 'checkbox';
    themeSwitcherInput.id = 'switch';
    themeSwitcherInput.classList.add('switch-input');
    themeSwitcher.appendChild(themeSwitcherInput);

    const themeSwitcherLabel = document.createElement('label');
    themeSwitcherLabel.setAttribute('for', 'switch');
    themeSwitcherLabel.classList.add('switch-label');

    const themeSwitcherIcon = document.createElement('span');
    themeSwitcherIcon.classList.add('switch-icon');
    themeSwitcherLabel.appendChild(themeSwitcherIcon);

    themeSwitcherLabel.addEventListener('click', function () {
        this.classList.toggle('switch-label--active');
        themeSwitcherIcon.classList.toggle('switch-icon--active');
    });

    themeSwitcher.appendChild(themeSwitcherLabel);
    themeSwitcherContainer.appendChild(themeSwitcher);
    container.appendChild(themeSwitcherContainer);
}
