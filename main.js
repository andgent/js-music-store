const endpoint = 'https://flynn.boolean.careers/exercises/api/array/music';

window.addEventListener('load', getAlbums());
function getAlbums() {
    axios
        .get(endpoint)
        .then((result) => {
            const albums = result.data.response;
            for (let i = 0; i < albums.length; i++) {
                addCard(albums[i], i);
            }
        })
        .catch(error => console.log(error));
}

function addCard(album, i) {
    const div = document.createElement('div');
    div.className = 'card me-3';
    div.style.width = "24rem";
    div.style.padding = "0";
    div.id='card'+i.toString();
    document.getElementById('gallery').appendChild(div);

    const img = document.createElement('img');
    img.className = 'img-fluid';
    img.src = album.poster.toString();
    img.id='img'+i.toString();
    div.appendChild(img);

    const title = document.createElement('h5');
    title.innerHTML = album.title;
    title.id='title'+i.toString();
    div.appendChild(title);

    const author = document.createElement('p');
    author.innerHTML = album.author;
    author.id='author'+i.toString();
    div.appendChild(author);

    const year = document.createElement('p');
    year.innerHTML = album.year;
    year.id='author'+i.toString();
    div.appendChild(year);

    const genre = document.createElement('p');
    genre.innerHTML = album.genre;
    genre.id='author'+i.toString();
    div.appendChild(genre);
}