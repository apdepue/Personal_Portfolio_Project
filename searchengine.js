document.addEventListener('DOMContentLoaded', () => {
const apiKey = "xdBasiyB4i9er9uNtWebLmiV7j0vwVQX"; 
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const gifContainer = document.getElementById('gif-container');

    searchButton.addEventListener('click', fetchGifs);
    searchInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') fetchGifs(); });

    async function fetchGifs() {
        const searchTerm = (searchInput.value || '').trim();
        if (searchTerm === '') {
            gifContainer.innerHTML = '<p>Please enter a search term.</p>';
            return;
        }

        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=20&offset=0&rating=g&lang=en`;

        gifContainer.innerHTML = '<p>Loading...</p>';

        try {
            const resp = await fetch(url);
            if (!resp.ok) throw new Error(`HTTP ${resp.status} ${resp.statusText}`);
            const data = await resp.json();
            displayGifs(Array.isArray(data.data) ? data.data : []);
        } catch (err) {
            console.error('Error fetching GIFs:', err);
            gifContainer.innerHTML = `<p>Error fetching GIFs: ${String(err)}</p>`;
        }
    }

    function displayGifs(gifs) {
        gifContainer.innerHTML = '';
        if (!gifs || gifs.length === 0) {
            gifContainer.innerHTML = '<p>No GIFs found.</p>';
            return;
        }

        gifs.forEach(gif => {
            const img = document.createElement('img');
            const imgUrl = gif && gif.images && (gif.images.fixed_height?.url || gif.images.original?.url);
            img.src = imgUrl || '';
            img.alt = gif && gif.title ? gif.title : 'GIF';
            img.loading = 'lazy';
            gifContainer.appendChild(img);
        });
    }
});
