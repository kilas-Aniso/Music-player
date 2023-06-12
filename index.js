let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player-container', {
        height: '315',
        width: '560',
        videoId: '',
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    // Player is ready to play
}

class Song {
    constructor(title, artist, mood, videoId) {
        this.title = title;
        this.artist = artist;
        this.mood = mood;
        this.videoId = videoId;
    }
}

const songs = [
    new Song("Song 1", "Sheikh Mustafa", "Mustafa", "1NcWuuwdgFs"),
    new Song("Song 2", "Sheikh Mustafa", "Mustafa", "DbyDJTJ-FwU"),
    new Song("Song 3", "Sheikh Mustafa", "Mustafa", "hgBbaCi3rdA"),
    new Song("Song 3", "Sheikh Mustafa", "Mustafa", "iOBzIm48Fiw"),
    new Song("Song 3", "Sheikh Mustafa", "Mustafa", "abW7twaV1tQ"),
    new Song("Song 3", "Sheikh Mustafa", "Mustafa", "u33JL7yYaiY"),
    new Song("Song 3", "Sheikh Mustafa", "Mustafa", "qAsjSnUnPNc"),
    new Song("Song 3", "Sheikh Mustafa", "Mustafa", "DmLyxOHF_Js"),
    new Song("Song 3", "Sheikh Hussein Ali Jabuti", "Jabuti", "WZ-f_XYkbnk"),
    new Song("Song 3", "Sheikh Hussein Ali Jabuti", "Jabuti", "C6-KY-dXeZ4"),
    new Song("Song 3", "Sheikh Hussein Ali Jabuti", "Jabuti", "JUCYsaN5zHo"),
    new Song("Song 3", "Sheikh Hussein Ali Jabuti", "Jabuti", "IREFZ3jyOYM"),
    new Song("Song 3", "Sheikh Hussein Ali Jabuti", "Jabuti", "H1HvKmJ4WUY"),
    // new Song("Song 3", "Sheikh Hussein Ali Jabuti", "Jabuti", "DmLyxOHF_Js"),
    // new Song("Song 3", "Sheikh Hussein Ali Jabuti", "Jabuti", "DmLyxOHF_Js"),
    // new Song("Song 3", "Sheikh Hussein Ali Jabuti", "Jabuti", "DmLyxOHF_Js"),
    // new Song("Song 3", "Sheikh Hussein Ali Jabuti", "Jabuti", "DmLyxOHF_Js"),
    // new Song("Song 3", "Sheikh Hussein Ali Jabuti", "Jabuti", "DmLyxOHF_Js"),
    // Add more songs here...
];

function handleUserInput() {
    const moodInput = document.getElementById('mood-input').value.toLowerCase();
    const matchingSongs = songs.filter(song => song.mood.toLowerCase() === moodInput);
    if (matchingSongs.length > 0) {
        displaySongs(matchingSongs);
        document.getElementById('no-song-message').classList.add('hidden');
        document.getElementById('player-container').classList.remove('hidden');
    } else {
        document.getElementById('song-title').textContent = '';
        document.getElementById('artist').textContent = '';
        player.stopVideo();
        document.getElementById('player-container').classList.add('hidden');
        document.getElementById('no-song-message').classList.remove('hidden');
        document.getElementById('song-list').innerHTML = '';
    }
}

function displaySongs(songs) {
    const songList = document.getElementById('song-list');
    songList.innerHTML = '';

    songs.forEach(song => {
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${song.videoId}`;
        songList.appendChild(iframe);
    });
}
