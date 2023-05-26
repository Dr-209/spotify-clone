console.log("Welcome to Spotify");

let songIndex=0;
let audioElement=new Audio('sanam.mp3');
let masterPlay=document.getElementById('masterPlay')
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif')
let song=[
    
 {   songName:"unstoppable",filePath:"song/unstoppable.mp3",coverPath:"sanam.jpg" },
       { songName:"Sanam teri kasam",filePath:"song/sanam.mp3 ",coverPath:"sanam.jpg" },
        {songName:"Salam-e-Ishq",filePath:"sanam.mp3",coverPath:"sanam.jpg" },
        {songName:"Salam-e-Ishq",filePath:"sanam.mp3",coverPath:"sanam.jpg"},
        {songName:"Salam-e-Ishq",filePath:"sanam.mp3",coverPath:"sanam.jpg" },
    
]

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
       audioElement.play();
      // masterPlay.classList.remove('fa-circle-play') ;
      // masterPlay.classList.remove('fa-pause-circle');
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
       gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
//listen to event
audioElement.addEventListener('timeupdate',()=>
{
   /* console.log('timeupdate')*/
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    /*console.log(progress);*/
    myProgressBar.value = progress;
}
)
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime= myProgressBar.value*audioElement.duration
}) 