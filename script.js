let songIndex=0;
let audioElement = new Audio('Covers/2 Asle.mp3');
let masterPlay=document.getElementById('play');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let masterSongInfo=document.getElementById('masterSongInfo');
let songs=[
    {songName:"2 Asle - Navaan Sandhu", filePath:"Covers/1.mp3", coverPath:"Covers/1.jpg"},
    {songName:"Adhiya - Karan Aujla", filePath:"Covers/2.mp3", coverPath:"Covers/2.jpg"},
    {songName:"C Walk - Navaan Sandhu", filePath:"Covers/3.mp3", coverPath:"Covers/3.jpg"},
    {songName:"Yarr Jatt De - Karan Aujla", filePath:"Covers/4.mp3", coverPath:"Covers/4.jpg"},
    {songName:"Hanji Hanji - Navaan Sandhu", filePath:"Covers/5.mp3", coverPath:"Covers/5.jpg"},
    {songName:"Jealousy - Navaan Sandhu", filePath:"Covers/6.mp3", coverPath:"Covers/6.jpg"},
    {songName:"Koi Chakkar Nai - Karan Aujla", filePath:"Covers/7.mp3", coverPath:"Covers/7.jpg"},
    {songName:"Mexico - Karan Aujla", filePath:"Covers/8.mp3", coverPath:"Covers/8.jpg"},
    {songName:"Plug Talk - Navaan Sandhu", filePath:"Covers/9.mp3", coverPath:"Covers/9.jpg"},
    {songName:"Radio - Navaan Sandhu", filePath:"Covers/10.mp3", coverPath:"Covers/10.jpg"},
]

songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;  
})

masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        document.getElementById("play").src = "pause.png";
        gif.style.opacity=1;
    }
    else{
        gif.style.opacity=0;
        audioElement.pause();
        document.getElementById("play").src = "play-button-arrowhead.png";
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    var progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('play_button')).forEach((element)=>{
        element.src="play.png";
    })
}

Array.from(document.getElementsByClassName('play_button')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.src="pause.png";
        masterSongInfo.innerText=songs[songIndex].songName;
        gif.style.opacity=1;
        audioElement.src=`Covers/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        document.getElementById('play').src="pause.png";
    })
})


document.getElementById('forward').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex=songIndex+1;
    }
    audioElement.src=`Covers/${songIndex+1}.mp3`;
    gif.style.opacity=1;
    audioElement.currentTime=0;
    masterSongInfo.innerText=songs[songIndex].songName;
    audioElement.play();
    document.getElementById('play').src="pause.png";
})
document.getElementById('back').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=9;
    }
    else{
        songIndex=songIndex-1;
    }
    audioElement.src=`Covers/${songIndex+1}.mp3`;
    gif.style.opacity=1;
    audioElement.currentTime=0;
    masterSongInfo.innerText=songs[songIndex].songName;
    audioElement.play();
    document.getElementById('play').src="pause.png";
})