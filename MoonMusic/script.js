console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Priyathama Neevachata Kusalama,Guna Movie, Ilayaraja", filePath: "songs/1.mp3", coverPath: "covers/pnk.jpg"},
    {songName: "Jaamu Rathiri jaabilamma,Kshana Kshanam,SPB", filePath: "songs/2.mp3", coverPath: "covers/jj.jpg"},
    {songName: "Em Sandeham Ledu,Oohalu Gusagusalade,Srinivas", filePath: "songs/3.mp3", coverPath: "covers/em.jpg"},
    {songName: "Inthandham,Sita Ramam,Dulquer,Mrunal ", filePath: "songs/4.mp3", coverPath: "covers/in.jpg"},
    {songName: " Odiyamma Song | Hi Nanna | Nani, Shruti Haasan | Dhruv", filePath: "songs/5.mp3", coverPath: "covers/oo.jpg"},
    {songName: "My Heart Is Beating Jalsa, Pawan Kalyan, Ileana", filePath: "songs/2.mp3", coverPath: "covers/hb.jpg"},
    {songName: "Baby He Loves You, Arya 2, Devi Sri Prasad", filePath: "songs/2.mp3", coverPath: "covers/bl.jpg"},
    {songName: "Hoyna Hoyna Gang leader | Nani | Anirudh", filePath: "songs/2.mp3", coverPath: "covers/ho.jpg"},
    {songName: "Willow Taylor Swift  ", filePath: "songs/2.mp3", coverPath: "covers/ts.jpeg"},
    {songName: " We Don't Talk Anymore Charlie puth (feat. Selena Gomez)", filePath: "songs/4.mp3", coverPath: "covers/sg.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})