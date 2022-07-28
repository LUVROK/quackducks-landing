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
window.addEventListener('scroll', function () {
    if ($(document).scrollTop() >= 1980) {
        // $(document).ready(function () {
        //     $("#audioplayer").get(0).play();
        // });
        document.querySelector('.btnPlay').click()
    }
    else {
        $(document).ready(function () {
            $("#audioplayer").get(0).pause();
        });
    }
})

function play () {
    $(document).ready(function () {
        $("#audioplayer").get(0).play();
    });
}