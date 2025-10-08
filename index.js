// Entry module for page logic (moved from inline script in index.html)
import './snow.js';

// NOTE: Move the large inline script content from index.html into this file.
// The file already contains some wiring snippets; ensure the rest of the page logic
// (password gate, popup helpers, DOMContentLoaded handlers, gameData mapping, etc.)
// is copied here in full so GitHub repository layout has scripts separated from HTML.

const gameData = {
    /* ...existing huge mapping ... */
    'craftmine': 'https://3kh0-lite-rose.vercel.app/projects/craftmine/index.html',
    'plinko': 'https://plinko-game-online.github.io/'
};
/* ...existing code... */

// Add common Pokémon titles to the gameData mapping
gameData['pokemon red'] = 'https://k-web-topaz.vercel.app/games/pokemonred/index.html';
gameData['pokemon blue'] = 'https://k-web-topaz.vercel.app/games/pokemonblue/index.html';
gameData['pokemon yellow'] = 'https://k-web-topaz.vercel.app/games/pokemonyellow/index.html';
gameData['pokemon gold'] = 'https://k-web-topaz.vercel.app/games/pokemongold/index.html';
gameData['pokemon silver'] = 'https://k-web-topaz.vercel.app/games/pokemonsilver/index.html';
gameData['pokemon crystal'] = 'https://k-web-topaz.vercel.app/games/pokemoncrystal/index.html';
gameData['pokemon ruby'] = 'https://k-web-topaz.vercel.app/games/pokemonruby/index.html';
gameData['pokemon sapphire'] = 'https://k-web-topaz.vercel.app/games/pokemonsapphire/index.html';
gameData['pokemon emerald'] = 'https://k-web-topaz.vercel.app/games/pokemonemerald/index.html';
gameData['pokemon fire red'] = 'https://k-web-topaz.vercel.app/games/pokemonfirered/index.html';
gameData['pokemon leaf green'] = 'https://k-web-topaz.vercel.app/games/pokemonleafgreen/index.html';
gameData['pokemon diamond'] = 'https://k-web-topaz.vercel.app/games/pokemondiamond/index.html';
gameData['pokemon pearl'] = 'https://k-web-topaz.vercel.app/games/pokemonpearl/index.html';
gameData['pokemon platinum'] = 'https://k-web-topaz.vercel.app/games/pokemonplatinum/index.html';
gameData['pokemon heartgold'] = 'https://k-web-topaz.vercel.app/games/pokemonheartgold/index.html';
gameData['pokemon soulsilver'] = 'https://k-web-topaz.vercel.app/games/pokemonsoulsilver/index.html';
gameData['pokemon black'] = 'https://k-web-topaz.vercel.app/games/pokemonblack/index.html';
gameData['pokemon white'] = 'https://k-web-topaz.vercel.app/games/pokemonwhite/index.html';
gameData['pokemon black 2'] = 'https://k-web-topaz.vercel.app/games/pokemonblack2/index.html';
gameData['pokemon white 2'] = 'https://k-web-topaz.vercel.app/games/pokemonwhite2/index.html';
gameData['pokemon x'] = 'https://k-web-topaz.vercel.app/games/pokemonx/index.html';
gameData['pokemon y'] = 'https://k-web-topaz.vercel.app/games/pokemony/index.html';
gameData['pokemon omega ruby'] = 'https://k-web-topaz.vercel.app/games/pokemonomegaruby/index.html';
gameData['pokemon alpha sapphire'] = 'https://k-web-topaz.vercel.app/games/pokemonalphasapphire/index.html';
gameData['pokemon sun'] = 'https://k-web-topaz.vercel.app/games/pokemonsun/index.html';
gameData['pokemon moon'] = 'https://k-web-topaz.vercel.app/games/pokemonmoon/index.html';
gameData['pokemon ultra sun'] = 'https://k-web-topaz.vercel.app/games/pokemonultrasun/index.html';
gameData['pokemon ultra moon'] = 'https://k-web-topaz.vercel.app/games/pokemonultramoon/index.html';
gameData['pokemon sword'] = 'https://k-web-topaz.vercel.app/games/pokemon-sword/index.html';
gameData['pokemon shield'] = 'https://k-web-topaz.vercel.app/games/pokemon-shield/index.html';
gameData['pokemon brilliant diamond'] = 'https://k-web-topaz.vercel.app/games/pokemonbrilliantdiamond/index.html';
gameData['pokemon shining pearl'] = 'https://k-web-topaz.vercel.app/games/pokemonshiningpearl/index.html';
gameData['pokemon legends arceus'] = 'https://k-web-topaz.vercel.app/games/pokemonlegendsarceus/index.html';
gameData['pokemon scarlet'] = 'https://k-web-topaz.vercel.app/games/pokemonscarlet/index.html';
gameData['pokemon violet'] = 'https://k-web-topaz.vercel.app/games/pokemonviolet/index.html';
gameData["pokemon let's go pikachu"] = 'https://k-web-topaz.vercel.app/games/pokemonletsgopikachu/index.html';
gameData["pokemon let's go eevee"] = 'https://k-web-topaz.vercel.app/games/pokemonletsgoleevee/index.html';

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
// Ensure searchResults visibility toggles keep show-more placement correct
searchBar.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    searchResults.innerHTML = '';
    const showMoreBtn = document.getElementById('search-show-more');

    if (query.length > 0) {
        const filteredGames = gameNames.filter(game => game.toLowerCase().includes(query));
        const top = filteredGames.slice(0, 5);
        top.forEach(game => {
            const link = document.createElement('a');
            link.href = gameData[game] || '#';
            link.textContent = game;
            searchResults.appendChild(link);
        });
        if (filteredGames.length > 5) {
            showMoreBtn.style.display = 'block';
            showMoreBtn.dataset.query = query;
        } else {
            showMoreBtn.style.display = 'none';
            showMoreBtn.dataset.query = '';
        }
        searchResults.style.display = top.length ? 'block' : 'none';
    } else {
        searchResults.style.display = 'none';
        document.getElementById('search-show-more').style.display = 'none';
    }
});
/* ...existing code... */

/* ...existing code... */
// Show-more modal wiring
const showMoreBtn = document.getElementById('search-show-more');
const searchMoreModal = document.getElementById('search-more-modal');
const searchMoreList = document.getElementById('search-more-list');
const closeSearchMore = document.getElementById('close-search-more');

showMoreBtn.addEventListener('click', () => {
    const q = showMoreBtn.dataset.query || '';
    const matches = gameNames.filter(g => g.toLowerCase().includes(q));
    searchMoreList.innerHTML = '';
    matches.forEach(game => {
        const btn = document.createElement('button');
        btn.style.cssText = 'text-align:left;padding:10px;border-radius:8px;background:rgba(255,255,255,0.02);border:2px solid rgba(255,255,255,0.02);color:var(--primary-color);cursor:pointer;font-family:PixelOperator-Bold,monospace;';
        const urlOrSpecial = gameData[game];
        btn.textContent = game;
        btn.addEventListener('click', () => {
            if (urlOrSpecial === 'special:interstellar') {
                const access = localStorage.getItem('qnb_unlocked_v1');
                if (access === 'full') openInAboutBlankStealth('https://interstellar-pus6.vercel.app');
                else openGameOverlay('https://interstellar-pus6.vercel.app');
            } else {
                openGameOverlay(urlOrSpecial);
            }
            searchMoreModal.style.display = 'none';
        });
        searchMoreList.appendChild(btn);
    });
    searchMoreModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

closeSearchMore.addEventListener('click', () => {
    searchMoreModal.style.display = 'none';
    document.body.style.overflow = '';
});
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
        closeGameBtn.addEventListener('click', closeGameOverlay);
        refreshGameBtn.addEventListener('click', refreshGame);
        
        const openNewTabBtn = document.getElementById('open-new-tab-btn');
        
        // Update proxy/unblock behavior for Interstellar button based on access level (callable globally)
        window.updateProxyVisibility = function() {
            try {
                const metBtn = document.getElementById('met-button');
                const proxiesBtn = document.getElementById('proxies-button');
                const adminUnlocked = sessionStorage.getItem('qnb_admin_unlocked') === '1';
                if (metBtn) metBtn.style.display = adminUnlocked ? 'flex' : 'none';
                if (proxiesBtn) proxiesBtn.style.display = adminUnlocked ? 'flex' : 'none';
            } catch (e) { console.warn('updateProxyVisibility failed', e); }
        };
        
        (function(){
            // Interstellar and MET toolbar buttons removed; proxies are accessible from /proxies.html (opened by the Proxies button).
            const proxiesBtn = document.getElementById('proxies-button');
            if (proxiesBtn && !proxiesBtn.hasListenerAttached) {
                proxiesBtn.addEventListener('click', () => {
                    openGameOverlay('./proxies.html');
                });
                proxiesBtn.hasListenerAttached = true;
            }
        })();
/* ...existing code... */
