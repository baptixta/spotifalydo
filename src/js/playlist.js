let playlist = document.querySelector('.playlist');
let playlistOpen = document.querySelector('.nav__playlist--add');
let playlistClose = document.querySelector('.playlist__close');
let playlistCreate = document.querySelector('.playlist__buttons--create');
let playlistCancel = document.querySelector('.playlist__buttons--cancel');
let playlistList = document.querySelector('.nav__playlist--list');
let playlistInput = document.querySelector('input');

// Abrir Playlist

playlistOpen.addEventListener('click', () => {
    playlist.style.display = "flex";
})

// Fechar Criar Playlist

playlistClose.addEventListener('click', () => {
    playlist.style.display = "none";
    playlistInput.value = '';
})

playlistCancel.addEventListener('click', () => {
    playlist.style.display = "none";
    playlistInput.value = '';
})

// Criar Playlist

playlistCreate.addEventListener('click', () => {
    // playlistList = document.createElement('li')
})

