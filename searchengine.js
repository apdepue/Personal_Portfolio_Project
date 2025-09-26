document.addEventListener('DOMContentLoaded', () => {
const apiKey = "xdBasiyB4i9er9uNtWebLmiV7j0vwVQX"; 
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const gifContainer = document.getElementById('gif-container');

searchButton.addEventListener('click', fetchGifs);

function fetchGifs() {
        const searchTerm = searchInput.value;
        if (searchTerm.trim() === '') {
            return;
        }

        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=25`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                displayGifs(data.data);
            })
            .catch(error => console.error('Error fetching GIFs:', error));
    }

    function displayGifs(gifs) {
        gifContainer.innerHTML = '';
        if (gifs.length === 0) {
            gifContainer.innerHTML = '<p>No GIFs found.</p>';
            return;
        }

        gifs.forEach(gif => {
            const img = document.createElement('img');
            img.src = gif.images.fixed_height.url;
            img.alt = gif.title;
            gifContainer.appendChild(img);
        });
    }
});