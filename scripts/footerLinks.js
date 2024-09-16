import { FOOTER_LINKS } from './constants.js';

export function displayFooterLinks() {
    const linksContainer = document.querySelector('.links-container');
    const fragment = document.createDocumentFragment();

    FOOTER_LINKS.forEach((linkList) => {
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

        fragment.appendChild(linksWrapper);
    });
    linksContainer.appendChild(fragment);
}
