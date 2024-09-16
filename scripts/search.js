const searchInput = document.querySelector('.search-input');
const noResults = document.querySelector('.no-results');
const DEBOUNCE_DELAY = 300;

function filterItems(query, items) {
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
export function debounceSearch(items) {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        const query = searchInput.value.toLowerCase().trim();
        filterItems(query, items);
    }, DEBOUNCE_DELAY);
}
