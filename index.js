// Entry module for page logic (moved from inline script in index.html)
import './snow.js';

// NOTE: Move the large inline script content from index.html into this file.
// The file already contains some wiring snippets; ensure the rest of the page logic
// (password gate, popup helpers, DOMContentLoaded handlers, gameData mapping, etc.)
// is copied here in full so GitHub repository layout has scripts separated from HTML.

const gameData = {
    /* ...existing huge mapping ... */
    'craftmine': 'https://3kh0-lite-rose.vercel.app/projects/craftmine/index.html'
};
/* ...existing code... */

// Add special searchable entry for interstellar that will trigger proxy behavior.
// Using a special marker value so search result creation can treat it specially.
gameData['interstellar'] = 'special:interstellar';
/* ...existing code... */

/* ...existing code... */
// Ensure filteredGames is defined before using it (fix ReferenceError)
const query = (searchBar && searchBar.value) ? searchBar.value.toLowerCase() : ''; 
const filteredGames = gameNames.filter(game => game.toLowerCase().includes(query));
filteredGames.slice(0, 6).forEach(game => {
    const link = document.createElement('a');
    const urlOrSpecial = gameData[game];
    if (urlOrSpecial === 'special:interstellar') {
        link.href = '#';
        link.dataset.action = 'interstellar';
    } else {
        link.href = urlOrSpecial;
    }
    link.textContent = game;
    searchResults.appendChild(link);
});
/* ...existing code... */

/* ...existing code... */
        searchBar.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault(); // Prevent form submission if it's in a form
                const firstResult = searchResults.querySelector('a');
                if (firstResult) {
                    if (firstResult.dataset.action === 'interstellar') {
                        const access = localStorage.getItem('qnb_unlocked_v1');
                        if (access === 'full') openInAboutBlankStealth('https://interstellar-pus6.vercel.app');
                        else openGameOverlay('https://interstellar-pus6.vercel.app');
                    } else {
                        openGameOverlay(firstResult.href);
                    }
                    searchResults.style.display = 'none';
                    searchBar.blur();
                }
            }
        });
/* ...existing code... */

        searchResults.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                e.preventDefault();
                if (e.target.dataset.action === 'interstellar') {
                    const access = localStorage.getItem('qnb_unlocked_v1');
                    if (access === 'full') openInAboutBlankStealth('https://interstellar-pus6.vercel.app');
                    else openGameOverlay('https://interstellar-pus6.vercel.app');
                } else {
                    openGameOverlay(e.target.href);
                }
                searchResults.style.display = 'none';
            }
        });
/* ...existing code... */

/* ...existing code... */
        // Interstellar Button
        const interstellarButton = document.getElementById('interstellar-button');
        // If the toolbar button exists (legacy), wire it up; otherwise search will handle the action.
        if (interstellarButton) {
            interstellarButton.addEventListener('click', () => {
                const access = localStorage.getItem('qnb_unlocked_v1');
                if (access === 'full') {
                    openInAboutBlankStealth('https://interstellar-pus6.vercel.app');
                } else {
                    openGameOverlay('https://interstellar-pus6.vercel.app');
                }
            });
        }
/* ...existing code... */
