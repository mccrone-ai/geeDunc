let songs_json_url = './songs_JSON.json' 
let displaySong = document.querySelector(".display-lyrics");

async function getSong(){
    const response = await fetch('./songs_JSON.json');
    const data = await response.json();
    const random_select = [Math.round(Math.random()*(data.song_object.length-1))];
    const song = data.song_object[random_select];
    const song_genre = song.genre;
    const song_emotion = song.emotion;
    const song_lyrics = song.lyrics;
    console.log(song_lyrics)
    //displaySong.innerHTML = song_lyrics;
    document.getElementById('emotion_genre').textContent = "I wrote you a " + song_emotion + song_genre + "song.";
    document.getElementById('lyrics').textContent = song_lyrics;
}   