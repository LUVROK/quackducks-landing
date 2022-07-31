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
const nav = document.querySelector("nav");

window.addEventListener('scroll', function () {
    if ($(document).scrollTop() >= 60) {
        nav.style.opacity = '0';
    }
    else {
        nav.style.opacity = '1';
    }
})

function play() {
    console.log($("#audioplayer").get(0))

    isPlaying($("#audioplayer").get(0)) === false ? ($(document).ready(function () {
        $("#audioplayer").get(0).play();
    }), $(".SvgPlay").addClass("displayPlayNone"),
        $(".SvgStop").addClass("displayPlayFlex"),
        $(".SvgPlay").removeClass("displayPlayFlex"),
        $(".SvgStop").removeClass("displayPlayNone")) : ($(document).ready(function () {
            $("#audioplayer").get(0).pause();
        }), $(".SvgPlay").addClass("displayPlayFlex"),
            $(".SvgStop").addClass("displayPlayNone"),
            $(".SvgPlay").removeClass("displayPlayNone"),
            $(".SvgStop").removeClass("displayPlayFlex"))
}

function isPlaying(audelem) { return !audelem.paused; }

function Minus_5() {
    $("#audioplayer").get(0).currentTime -= 5;
}
function Plus_5() {
    $("#audioplayer").get(0).currentTime += 5;
}

let numberPage = 0;
const imageComix = document.querySelectorAll(".imageComix");

function isPlaying1() {
    const Active = document.querySelector(".active");
    numberPage = Active.id;
    document.getElementById("numberPage").innerHTML = `#0${numberPage}`
    return numberPage;
}
// isPlaying()

const swiper_back = document.querySelector("#swiper_back");
const swiper_to = document.querySelector("#swiper_to");

swiper_back.addEventListener("click", e => {
    try {
        // console.log(imageComix[numberPage]);
        const Active = document.querySelector(".active");
        numberPage = Active.id;
        numberPage = parseInt(numberPage);
        if (imageComix[numberPage - 1]) {
            imageComix[numberPage].classList.remove('active');
            imageComix[numberPage - 1].classList.add('active');
            document.getElementById("numberPage").innerHTML = `#0${numberPage - 1}`;
        }
        if (numberPage - 1 === 0) {
            document.querySelector(".back").style.opacity = '0';
            document.querySelector(".numberPage").style.opacity = '0';
            document.querySelector(".to").style.opacity = '0';
            document.querySelector(".btnPlay").style.opacity = '0';
            document.querySelector(".controllSong").style.visibility = 'hidden';
            document.querySelector(".controllSong").style.transition = '0s';
            document.querySelector(".controllSong").style.opacity = '0';
            isPlaying($("#audioplayer").get(0)) === true ? $("#audioplayer").get(0).pause() : null;
            // play();
        }
    }
    catch (e) {

    }
});
swiper_to.addEventListener("click", e => {
    try {
        // console.log(imageComix[numberPage]);
        const Active = document.querySelector(".active");
        numberPage = Active.id;
        numberPage = parseInt(numberPage);
        if (imageComix[numberPage + 1]) {
            imageComix[numberPage].classList.remove('active');
            imageComix[numberPage + 1].classList.add('active');
            document.getElementById("numberPage").innerHTML = `#0${numberPage + 1}`
            // imageComix[numberPage + 1].classList.add('active');
        }
    }
    catch (e) {

    }
});

function startreading() {
    swiper_to.click();
    document.querySelector(".back").style.opacity = '1';
    document.querySelector(".numberPage").style.opacity = '1';
    document.querySelector(".to").style.opacity = '1';
    if ((/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))) {
        document.querySelector(".btnPlay").style.opacity = '1';
    }
    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))) {

        document.querySelector(".controllSong").style.visibility = 'visible';
        document.querySelector(".controllSong").style.transition = '0s';
        document.querySelector(".controllSong").style.opacity = '1';
        document.querySelector(".notification").style.opacity = '1';
        document.querySelector(".notification").style.transform = 'translateX(0px)';
        document.querySelector(".btnPlay2").style.transform = 'translateX(80px)';
        document.querySelector(".btnPlay2").style.opacity = '1';

        setTimeout(function () {
            SongClose.style.animation = 'moveAroundBack 2s ease-in-out';
            document.querySelector(".btnPlay2").style.transform = 'translateX(-500px)';
            document.querySelector(".btnPlay2").style.opacity = '0';
            // document.querySelector(".notification").style.transform = 'translateX(-200px)';
            // document.querySelector(".notification").style.opacity = '0';
        }, 3000);
    }
    // controllSong
    // play();
}

const SongClose = document.querySelector(".SongClose");
SongClose.addEventListener("click", e => {
    try {
        // console.log(imageComix[numberPage]);
        // const Active = document.querySelector(".active");
        // numberPage = Active.id;
        // numberPage = parseInt(numberPage);
        // if (imageComix[numberPage + 1]) {
        //     imageComix[numberPage].classList.remove('active');
        //     imageComix[numberPage + 1].classList.add('active');
        //     document.getElementById("numberPage").innerHTML = `#0${numberPage + 1}`
        //     // imageComix[numberPage + 1].classList.add('active');
        // }

        document.querySelector(".btnPlay2").style.transform === 'translateX(80px)' 
        ? (SongClose.style.animation = 'moveAround 2s ease-in-out', document.querySelector(".btnPlay2").style.transform = 'translateX(-500px)'
        , document.querySelector(".btnPlay2").style.opacity = '0')
        : (SongClose.style.animation = 'moveAroundback 2s ease-in-out', document.querySelector(".btnPlay2").style.transform = 'translateX(80px)'
        , document.querySelector(".btnPlay2").style.opacity = '1',
        setTimeout(function () {
            SongClose.style.animation = 'moveAround 2s ease-in-out';
            document.querySelector(".btnPlay2").style.transform = 'translateX(-500px)';
            document.querySelector(".btnPlay2").style.opacity = '0';
            document.querySelector(".notification").style.transform = 'translateX(-200px)';
            document.querySelector(".notification").style.opacity = '0';
        }, 7000));
        // setTimeout(function () {
        //     document.querySelector(".notification").style.transform = 'translateX(-200px)'
        // }, 10000);
        // console.log(document.querySelector(".btnPlay2").style.transform === 'translateX(80px)')

    }
    catch (e) {

    }
});