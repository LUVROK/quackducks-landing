// function playSound(sound) {
//     var song = document.getElementById(sound);
//     song.muted = true;
//     song.volume = 1;
//     if (song.paused) {
//       song.play();
//     } else {
//       song.pause();
//     }
// }
// playSound('sound')

window.onload = function () {
    document.body.classList.add('loaded_hiding');

    // var context = new AudioContext();
    // let audioElement = document.getElementById('player');
    // audioElement.play();
    // document.getElementById('audio').play();
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}

let playBool = false;
const SvgPlay = document.querySelector(".SvgPlay");

window.addEventListener('scroll', function () {
    if ($(document).scrollTop() >= 2980) {
        btnPlay.style.display = 'flex';
        // $(document).ready(function () {
        //     $("#audioplayer").get(0).play();
        // });
        // document.querySelector('.btnPlay').touchstart()
        isPlaying($("#audioplayer").get(0)) === false ? SvgPlay.click() : null;
        // this.alert('fff')
        // document.querySelector('.btnPlay').touch
        // $('#btnPlay').on('touchstart click', function(){ $(document).ready(function () {
        //     $("#audioplayer").get(0).play();
        // }); });
    }
    else {
        btnPlay.style.display = 'none';
        $(document).ready(function () {
            $("#audioplayer").get(0).pause();
        });
    }
})

function play () {
    // console.log(isPlaying($("#audioplayer").get(0)))
    
    isPlaying($("#audioplayer").get(0)) === false ? ($(document).ready(function () {
        $("#audioplayer").get(0).play();
    }), $( ".SvgPlay" ).addClass( "displayPlayNone" ), 
    $( ".SvgStop" ).addClass( "displayPlayFlex" ),
    $( ".SvgPlay" ).removeClass( "displayPlayFlex" ), 
    $( ".SvgStop" ).removeClass( "displayPlayNone" )) : ($(document).ready(function () {
        $("#audioplayer").get(0).pause();
    }), $( ".SvgPlay" ).addClass( "displayPlayFlex" ), 
    $( ".SvgStop" ).addClass( "displayPlayNone" ),
    $( ".SvgPlay" ).removeClass( "displayPlayNone" ), 
    $( ".SvgStop" ).removeClass( "displayPlayFlex" ))
}
function isPlaying(audelem) { return !audelem.paused; }

function Minus_5(){
    $("#audioplayer").get(0).currentTime -= 5;
}
function Plus_5(){
    $("#audioplayer").get(0).currentTime += 5;
    
}