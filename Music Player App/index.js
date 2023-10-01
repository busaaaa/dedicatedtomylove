alert('Happy GF Day My Love of My Life <33');
const image = document.getElementById('cover'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    background = document.getElementById('bg-img');

const music = new Audio();

const songs = [
    {
        path: 'onlymp3.to - Michal Leah The Way I Love You-D6cKEXa6jCo-192k-1696151456.mp3',
        displayName: 'The Way I Love You',
        cover: 'hazel.jpg',
        artist: 'Michal Leah',
    },
    {
        path: 'onlymp3.to - Taylor Swift Lover Lyrics -AMtN4sOvhqY-192k-1696152652.mp3',
        displayName: 'Lover',
        cover: 'hazel2.jpg',
        artist: 'Taylor Swift',
    },
    {
        path: 'onlymp3.to - New West Those Eyes Lyrics -_-YjO6KfEMk-192k-1696152934.mp3',
        displayName: 'Those Eyes',
        cover: 'hazel3.jpg',
        artist: 'New West',
    },
    {
        path: 'bad.mp3',
        displayName: 'bad',
        cover: 'hazel4.jpg',
        artist: 'wave to earth',
    },
    {
        path: 'H.E.R. - Best Part (Lyrics) Ft. Daniel Caesar.mp3',
        displayName: 'Best Part',
        cover: 'hazel5.jpg',
        artist: 'Daniel Caesar',
    },
    {
        path: "Nothing's Gonna Change My Love For You Lyrics - Justin Bieber (AI Cover).mp3",
        displayName: "Nothing's Gonna Change",
        cover: 'hazel6.jpg',
        artist: 'Justin Bieber (AI Cover)',
    },
    {
        path: "beabadoobee - Glue Song (Lyric Video) ft. Clairo.mp3",
        displayName: "Glue Song ft. Clairo",
        cover: 'hazel7.jpg',
        artist: 'beabadoobee',
    },
    {
        path: "pasilyo.mp3",
        displayName: "Pasilyo",
        cover: 'hazel8.jpg',
        artist: 'SunKissed Lola',
    },
    {
        path: "only.mp3",
        displayName: "Only",
        cover: 'hazel9.jpg',
        artist: 'Lee Hi',
    },
    {
        path: "Bruno Major - Nothing (Lyric & Chord Video).mp3",
        displayName: "Nothing",
        cover: 'hazel10.jpg',
        artist: 'Bruno Major',
    },
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic() {
    isPlaying = true;
    // Change play button icon
    playBtn.classList.replace('fa-play', 'fa-pause');
    // Set button hover title
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    // Change pause button icon
    playBtn.classList.replace('fa-pause', 'fa-play');
    // Set button hover title
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar() {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);