// прелоадер
let numberZero, numberOne, numberTwo;
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
        boxDucks.classList.add('active');
        boxTitle.classList.add('active');
    }, 500);

    window.scrollTo(0, 0);

    let min_second_bg = 3300;
    let max_second_bg = 8500;

    let block_factions = document.getElementById('section3');
    let ducks_gallery = document.getElementById("section8");


    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        numberZero = 0 + "%";
        numberOne = 30 + "%";
        numberTwo = 77 + "%";
    } else {
        numberZero = 0 + "%";
        numberOne = 40 + "%";
        numberTwo = 80 + "%";
    }

    let position1 = block_factions.getBoundingClientRect();
    let bottom1 = position1.bottom;
    let top1 = position1.top;
    let center1 = ((bottom1 - top1) / 2) + top1;
    let position2 = ducks_gallery.getBoundingClientRect();
    let bottom2 = position2.bottom;
    let top2 = position2.top;
    let center2 = ((bottom2 - top2) / 2) + top2;

    console.log("block_factions top1 - " + top1)
    console.log("block_factions bottom1 - " + bottom1)
    console.log("block_factions center1 - " + center1)
    console.log("ducks_gallery top2 - " + top2)
    console.log("ducks_gallery bottom2 - " + bottom2)
    console.log("ducks_gallery center2 - " + center2)

    window.addEventListener('scroll', function () {
        if ($(document).scrollTop() >= center1 && $(document).scrollTop() <= center2) {
            // console.log("scrollTop")
            if ($('body').hasClass('second-bg')) {
                return
            } else {
                $('body').addClass('second-bg');
                $('body').removeClass('faq-bg');
            }
        }
        else if ($(document).scrollTop() > center2) {
            if ($('body').hasClass('faq-bg')) {
                return
            } else {
                $('body').addClass('faq-bg');
                $('body').removeClass('second-bg');
            }
        }
        else {
            // if ($('body').hasClass('second-bg') || $('body').hasClass('faq-bg')) {
            $('body').removeClass('second-bg');
            $('body').removeClass('faq-bg');
            // } else {
            //     return;
            // }
        }
    })
}

// window.onscroll = function () {
//     window.scrollTo(0, window.scrollY);
//     console.log($(document).scrollTop())
// }

let boxDucks = document.querySelector(".box_ducks");
let boxTitle = document.querySelector(".box_title");

let nav = document.querySelector("nav");
let blackWallpaper = document.querySelector(".black_wallpaper");

// jQuery(document).ready(function () {
//     jQuery("a.scrollto").click(function () {
//         elementClick = jQuery(this).attr("href")
//         destination = jQuery(elementClick).offset().top;
//         jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 1100);
//         return false;
//     });
// });

// $(window).on('#Move_welcome-block', function () {
//     $.scrollify.move("#1");
// });

// $('a[href^="#"]').click(function () { // #1
//     let anchor = $(this).attr('href');  // #2
//     $('html, body').animate({           // #3
//         scrollTop: $(anchor).offset().top  // #4
//     });                            // #5
//     console.log(1)
// });

// window.onscroll = function () {
//     let hash = $(location).attr('hash');

//     if (hash == "#black_wallpaper" || hash == "#welcome-block" || hash == "#gallery" || hash == "#block_factions" || hash == "#ducks-gallery" || hash == "#faq" || hash == "#faq-duck") {
//         nav.style.background = "none";
//         blackWallpaper.style.display = "none";
//     }
//     else {
//         nav.style.background = "#5F5F5F";
//         blackWallpaper.style.display = "flex";
//         nav.style.backgroundColor = 'rgba(55, 55, 55, 0.63)';
//     }
// }

// function throttle(callee, timeout) {
//     let timer = null;
//     return function perform(...args) {
//         if (timer) return;
//         timer = setTimeout(() => {
//             callee(...args);
//             clearTimeout(timer);
//             timer = null;
//         }, timeout);
//     };
// }

// function recalculateProgress() {
//     if (window.pageYOffset > 30) {
//         nav.style.background = "#5F5F5F";
//         blackWallpaper.style.display = "flex";
//         nav.style.backgroundColor = 'rgba(55, 55, 55, 0.63)';
//         console.log(window.pageYOffset)
//     }
//     else {
//         nav.style.background = "none";
//         blackWallpaper.style.display = "none";
//     }
//     // window.pageXOffset >= 2718
//     //     ? black_wallpaper.classList.add('hiddenBackground')
//     //     : black_wallpaper.classList.remove('hiddenBackground')
// }

// const optimizedHandler = throttle(recalculateProgress, 200);

// window.addEventListener("scroll", optimizedHandler);
// window.addEventListener("resize", optimizedHandler);



/*//настройки шума, тут покрутишь найдешь нужное.
class Grain {
    constructor (el) {
      this.patternSize = 150;
      this.patternScaleX = 1;
      this.patternScaleY = 1;
      this.patternRefreshInterval = 1;
      this.patternAlpha = 75;

      this.canvas = el;
      this.ctx = this.canvas.getContext('2d');
      this.ctx.scale(this.patternScaleX, this.patternScaleY);
      this.patternCanvas = document.createElement('canvas');
      this.patternCanvas.width = this.patternSize;
      this.patternCanvas.height = this.patternSize;
      this.patternCtx = this.patternCanvas.getContext('2d');
      this.patternData = this.patternCtx.createImageData(this.patternSize, this.patternSize);
      this.patternPixelDataLength = this.patternSize * this.patternSize * 4; // rgba = 4
      this.resize = this.resize.bind(this);
      this.loop = this.loop.bind(this);

      this.frame = 0;

      window.addEventListener('resize', this.resize);
      this.resize();

      window.requestAnimationFrame(this.loop);
    }

    resize () {
      this.canvas.width = window.innerWidth * devicePixelRatio;
      this.canvas.height = window.innerHeight * devicePixelRatio;
    }

    update () {
      const {patternPixelDataLength, patternData, patternAlpha, patternCtx} = this;

      for (let i = 0; i < patternPixelDataLength; i += 4) {
        const value = Math.random() * 255;

        patternData.data[i] = value;
        patternData.data[i + 1] = value;
        patternData.data[i + 2] = value;
        patternData.data[i + 3] = patternAlpha;
      }

      patternCtx.putImageData(patternData, 0, 0);
    }

    draw () {
      const {ctx, patternCanvas, canvas, viewHeight} = this;
      const {width, height} = canvas;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
      ctx.fillRect(0, 0, width, height);
    }

    loop () {
      const shouldDraw = ++this.frame % this.patternRefreshInterval === 0;
      if (shouldDraw) {
        this.update();
        this.draw();
      }

      window.requestAnimationFrame(this.loop);
    }
  }

  const el = document.querySelector('.grain');
  const grain = new Grain(el);*/






const ducksImg = document.querySelectorAll(".ducks_block_one_img");
const contentTextBox = document.querySelectorAll(".content_body_textBox_one");
const ducksBlock = document.querySelectorAll(".ducks_block_one");
const contentDucks = document.querySelectorAll(".content_body_ducks");
const ducksImgBack = document.querySelector(".button_left_duck");
const ducksImgNext = document.querySelector(".button_right_duck");
function caruselBackNull() {
    if (carusel == 0) {
        caruselBack = 0;
    }
    else if (carusel == 1) {
        caruselBack = 1;
    }
    else if (carusel == 2) {
        caruselBack = 2;
    }
};
let carusel = 0;
let caruselBack = 0;
let permissionBig = 1880;
let permissionLarge = 1400;
let permissionMedium = 1000;
let permissionSmall = 880;
let newNumber = 0;
let newNumberOne = 0;
// ducksImgBack.onclick = ducksImgSliderBack ();
//поменял местами события клик ducksImgNext и ducksImgBack
ducksImgNext.addEventListener("click", ducksImgSliderBack);
function ducksImgSliderBack() {
    newNumberNull();
    ducksImgBack.style.display = "none";
    ducksImgNext.style.display = "none";
    setTimeout(function () {
        ducksImgBack.style.display = "flex";
        ducksImgNext.style.display = "flex";
    }, 1000);
    if (window.outerWidth > permissionLarge && window.outerWidth < permissionBig) {
        numberZero = 0 + "%";
        numberOne = 37 + "%";
        numberTwo = 74 + "%";
    }
    else if (window.outerWidth <= permissionLarge && window.outerWidth >= permissionMedium) {
        numberZero = 0 + "%";
        numberOne = 34 + "%";
        numberTwo = 77 + "%";
    }
    else if (window.outerWidth < permissionMedium && window.outerWidth > permissionSmall) {
        numberZero = 0 + "%";
        numberOne = 33 + "%";
        numberTwo = 77 + "%";
    }
    else if (window.outerWidth <= permissionSmall) {
        numberZero = -12 + "%";
        numberOne = 58 + "%";
        numberTwo = 128 + "%";

    }
    newNumber++;
    if (caruselBack == 0) {
        for (let i = 0; i < 3; i++) {
            ducksImg[i].classList.remove('active');
            contentTextBox[i].classList.remove('active');
            ducksBlock[i].classList.remove('active');
        }
        ducksImg[2].classList.add('active');
        contentTextBox[2].classList.add('active');
        ducksBlock[2].classList.add('active');
        ducksBlock[0].style.left = numberTwo;
        ducksBlock[1].style.left = numberZero;
        ducksBlock[0].style.zIndex = "-1";
        ducksBlock[2].style.zIndex = "1";
        ducksBlock[2].style.left = numberOne;
        caruselBack++;
    }
    else if (caruselBack == 1) {
        for (let i = 0; i < 3; i++) {
            ducksImg[i].classList.remove('active');
            contentTextBox[i].classList.remove('active');
            ducksBlock[i].classList.remove('active');
        }
        ducksImg[0].classList.add('active');
        contentTextBox[0].classList.add('active');
        ducksBlock[0].classList.add('active');
        ducksBlock[0].style.left = numberOne;
        ducksBlock[1].style.zIndex = "-1";
        ducksBlock[0].style.zIndex = "1";
        ducksBlock[1].style.left = numberTwo;
        ducksBlock[2].style.left = numberZero;
        caruselBack++;
    }
    else if (caruselBack == 2) {
        for (let i = 0; i < 3; i++) {
            ducksImg[i].classList.remove('active');
            contentTextBox[i].classList.remove('active');
            ducksBlock[i].classList.remove('active');
        }
        ducksImg[1].classList.add('active');
        contentTextBox[1].classList.add('active');
        ducksBlock[1].classList.add('active');
        ducksBlock[2].style.zIndex = "-1";
        ducksBlock[1].style.zIndex = "1";
        ducksBlock[0].style.left = numberZero;
        ducksBlock[1].style.left = numberOne;
        ducksBlock[2].style.left = numberTwo;
        caruselBack = 0;
    }
    // numberZero = 0 +"%";
    // numberOne = 40 +"%";
    // numberTwo = 80 +"%";
    caruselkNull();

}


ducksImgBack.addEventListener("click", ducksImgSliderNext);
// ducksImgNext.onclick = ducksImgSliderNext ();
function ducksImgSliderNext() {
    newNumberOneNull();
    ducksImgNext.style.display = "none";
    setTimeout(function () { ducksImgNext.style.display = "flex"; }, 1000);
    if (window.outerWidth > permissionLarge && window.outerWidth < permissionBig) {
        numberZero = 0 + "%";
        numberOne = 37 + "%";
        numberTwo = 74 + "%";
    }
    else if (window.outerWidth <= permissionLarge && window.outerWidth >= permissionMedium) {
        numberZero = 0 + "%";
        numberOne = 34 + "%";
        numberTwo = 77 + "%";

    }
    else if (window.outerWidth < permissionMedium && window.outerWidth > permissionSmall) {
        numberZero = 0 + "%";
        numberOne = 33 + "%";
        numberTwo = 77 + "%";
    }
    else if (window.outerWidth <= permissionSmall) {
        numberZero = -12 + "%";
        numberOne = 58 + "%";
        numberTwo = 128 + "%";

    }
    newNumberOne++;
    if (carusel == 0) {
        for (let i = 0; i < 3; i++) {
            ducksImg[i].classList.remove('active');
            contentTextBox[i].classList.remove('active');
            ducksBlock[i].classList.remove('active');
        }
        ducksImg[carusel].classList.add('active');
        contentTextBox[carusel].classList.add('active');
        ducksBlock[carusel].classList.add('active');
        ducksBlock[0].style.left = numberOne;
        ducksBlock[1].style.left = numberTwo;
        ducksBlock[2].style.zIndex = "-1";
        ducksBlock[0].style.zIndex = "1";
        ducksBlock[2].style.left = numberZero;
        carusel++;
    }
    else if (carusel == 1) {
        for (let i = 0; i < 3; i++) {
            ducksImg[i].classList.remove('active');
            contentTextBox[i].classList.remove('active');
            ducksBlock[i].classList.remove('active');
        }
        ducksImg[carusel + 1].classList.add('active');
        contentTextBox[carusel + 1].classList.add('active');
        ducksBlock[carusel + 1].classList.add('active');
        ducksBlock[0].style.left = numberTwo;
        ducksBlock[1].style.zIndex = "-1";
        ducksBlock[2].style.zIndex = "1";
        ducksBlock[1].style.left = numberZero;
        ducksBlock[2].style.left = numberOne;
        carusel++;
    }
    else if (carusel == 2) {
        for (let i = 0; i < 3; i++) {
            ducksImg[i].classList.remove('active');
            contentTextBox[i].classList.remove('active');
            ducksBlock[i].classList.remove('active');
        }
        ducksImg[1].classList.add('active');
        contentTextBox[1].classList.add('active');
        ducksBlock[1].classList.add('active');
        ducksBlock[0].style.zIndex = "-1";
        ducksBlock[1].style.zIndex = "1";
        ducksBlock[0].style.left = numberZero;
        ducksBlock[1].style.left = numberOne;
        ducksBlock[2].style.left = numberTwo;
        carusel = 0;
    }
    // numberZero = 0 +"%";
    // numberOne = 40 +"%";
    // numberTwo = 80 +"%";
    caruselBackNull();

}


function newNumberNull() {
    if (newNumber == 0) {
        newNumberOne = 2;
        // console.log(newNumber)
        // console.log(newNumberOne)
    }
    else if (newNumber == 1) {
        newNumberOne = 1;
        // console.log(newNumber)
        // console.log(newNumberOne)
    }
    else if (newNumber == 2) {
        newNumberOne = 0;
        // console.log(newNumber)
        // console.log(newNumberOne)
    }
};

function newNumberOneNull() {
    if (newNumberOne == 0) {
        newNumber = 2;
        //    console.log(newNumberOne)
        //    console.log(newNumber)
    }
    else if (newNumberOne == 1) {
        newNumber = 1;
        // console.log(newNumberOne)
        // console.log(newNumber)
    }
    else if (newNumberOne == 2) {
        newNumber = 0;
        // console.log(newNumberOne)
        // console.log(newNumber)
    }
};

function caruselBackNull() {
    if (carusel == 0) {
        caruselBack = 0;
    }
    else if (carusel == 1) {
        caruselBack = 2;
    }
    else if (carusel == 2) {
        caruselBack = 2;
    }
};

function caruselkNull() {
    if (caruselBack == 0) {
        carusel = 1;
    }
    else if (caruselBack == 1) {
        carusel = 2;
    }
    else if (caruselBack == 2) {
        carusel = 1;
    }
};



// Вешаем на прикосновение функцию handleTouchStart
const tuchScreen = document.querySelector(".faction_content_body");
tuchScreen.addEventListener('touchstart', handleTouchStart, false);
// А на движение пальцем по экрану - handleTouchMove
tuchScreen.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
};

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    // немного поясню здесь. Тут берутся модули движения по оси абсцисс и ординат (почему модули? потому что если движение сделано влево или вниз, то его показатель будет отрицательным) и сравнивается, чего было больше: движения по абсциссам или ординатам. Нужно это для того, чтобы, если пользователь провел вправо, но немного наискосок вниз, сработал именно коллбэк для движения вправо, а ни как-то иначе.
    if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
        if (xDiff > 0) {
            /* left swipe */
            ducksImgSliderBack();

        } else {
            /* right swipe */
            ducksImgSliderNext();
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};


// section_three_vision


// five block img ducks
const dusksAbsolute = document.querySelector(".dusks_smallBox__absolute");
const dusksClose = document.querySelector(".smallBox_absolute__close");
const ducksAllImg = document.querySelectorAll(".small_box__img");
const absoluteBigImg = document.querySelector(".smallBox_absolute__bigImg");



function duckAbsolute(a) {

    let img = ducksAllImg[a].src;
    absoluteBigImg.src = ducksAllImg[a].src;
    // console.log(ducksAllImg[a].src);
    dusksAbsolute.style.display = "flex";
}
function duckClose() {
    dusksAbsolute.style.display = "none";
}


// six block faq
const sectionSmallPlus = document.querySelectorAll(".sectionSmall_box__plus");
const sectionSmallText = document.querySelectorAll(".sectionSmall_box__text");

function faqPluse(a) {
    if (sectionSmallText[a].style.display === "flex") {
        for (let i = 0; i < sectionSmallText.length; i++) {
            sectionSmallText[i].style.display = "none";
        }
        sectionSmallText[a].style.display = "none";
    }

    else {
        for (let i = 0; i < sectionSmallText.length; i++) {
            sectionSmallText[i].style.display = "none";
        }
        sectionSmallText[a].style.display = "flex";
    }
}

const faqDusksSection = document.querySelector(".faq_dusks__sectionBig");
const smallBoxImg = document.querySelector(".img_dusks__smallBox");
const faqDusksSmallBox = document.querySelector(".faq_dusks__smallBox");










// const boxGaaler = document.querySelector(".box");

// boxGaaler.addEventListener("mouseenter", function() {
//     // highlight the mouseenter target
//     event.target.style.color = "purple";
//     boxGaaler.classList.add('box-active')
//     // reset the color after a short delay
//     setTimeout(function() {
//       event.target.style.color = "";
//     }, 500);
//   }, false);


// var enterEventCount = 0;
// var leaveEventCount = 0;
// const mouseTarget = document.getElementById('box-active');
// const unorderedList = document.getElementById('box-unactive');

const boxGaaler1 = document.querySelectorAll("#box_duckOne_img_1, #box_duckOne_img_2, #box_duckOne_img_3, #box_duckOne_img_4, #box_duckOne_img_5")
const element2 = document.querySelector("#box_duckOne_img_2")
const elementsArray = [...boxGaaler1];
let activeElement = 2;
let activeElement_last = activeElement - 1;
// const boxGaaler2 = document.getElementById("box_duckOne_img");

// boxGaaler2.addEventListener('mouseenter', e => {
//     // boxGaaler2.classList.add('box-active');
//     // boxGaaler2.classList.remove('box-unactive');
//     boxGaaler2.style.flex = '1 1 20%';

// });

// boxGaaler2.addEventListener('mouseleave', e => {
//     // boxGaaler2.classList.add('box-unactive');
//     // boxGaaler2.classList.remove('box-active');
//     boxGaaler2.style.flex = '1';
// });

elementsArray.forEach(element => {
    element.addEventListener('mouseenter', e => {
        element.classList.add('box-active');
        // console.log(elementsArray)
        if (element.id === "box_duckOne_img_2") {
            // console.log(element.id)
            element2.classList.add('box-active');
        }
        else {
            element2.classList.remove('box-active');
        }
        elementsArray[activeElement - 1].classList.remove('box-active')
        // console.log(elementsArray[activeElement - 1])
        // console.log(element.id)
        // boxGaaler2.classList.remove('box-unactive');
        // element.style.flex = '1 1 20%';

    });
    element.addEventListener('mouseleave', e => {
        // boxGaaler2.classList.add('box-unactive');
        element.classList.remove('box-active');
        if (element.id === "box_duckOne_img_2") {
            element2.classList.add('box-active');
        }
        else {
            element2.classList.add('box-active');
        }
        // elementsArray[activeElement - 1].classList.remove('box-active')
        // console.log(elementsArray[activeElement - 1])
        // if (element2.classList[1] !== undefined && activeElement !== 2) {
        //     element2.classList.remove('box-active');
        // }
        // else {
        //     element2.classList.remove('box-active');
        // }
        // element.style.flex = '1';
    });
});

const swiper_left = document.querySelector("#arrows__left");
const swiper_right = document.querySelector("#arrows__right");

swiper_left.addEventListener("click", e => {
    activeElement > 1 ?
        activeElement-- : activeElement = 5;
    activeElement === 5 ? activeElement_last = 1 :
        activeElement_last = activeElement + 1;
    let act = ("box_duckOne_img_" + activeElement).toString()
    let act_last = ("box_duckOne_img_" + activeElement_last).toString()
    const element = document.querySelector(`#${act}`)
    const element_last = document.querySelector(`#${act_last}`)
    element.classList.add('box-active');
    element_last.classList.remove('box-active');
    activeElement !== 2 ? element2.classList.remove('box-active') : null;
});

swiper_right.addEventListener("click", e => {
    activeElement < 5 ?
        activeElement++ : activeElement = 1;
    activeElement === 1 ? activeElement_last = 5 :
        activeElement_last = activeElement - 1;
    let act = ("box_duckOne_img_" + activeElement).toString()
    let act_last = ("box_duckOne_img_" + activeElement_last).toString()
    const element = document.querySelector(`#${act}`)
    const element_last = document.querySelector(`#${act_last}`)
    element.classList.add('box-active');
    element_last.classList.remove('box-active');
    activeElement !== 2 ? element2.classList.remove('box-active') : null;
});

// const containerVisibility = document.querySelector(".box_all")
// const containerControlScroll = document.querySelector(".block_factions")

// console.log('Текущая прокрутка сверху: ' + window.pageYOffset);
// alert( 'Текущая прокрутка слева: ' + window.pageXOffset );
















// faqDusksSmallBox.onmouseover =
function sliderUp() {
    faqDusksSection.classList.add("active");
    smallBoxImg.style.zIndex = "1";
    console.log("yes");
    faqDusksSmallBox.classList.add("active");
}


var swiper = new Swiper(".mySwiper", {});


// Просмотр фото галереии
let imgSrc = $(".ducks-gallery-img").on('click', function (e) { imgSrc = e.target.src; openGalery() });
let allImages = '';
let imgNumber = 0;
function openGalery() {
    $(".view-photo").addClass("show-popup");
    allImages = $(".ducks-gallery-img img");
    $(".view-photo-big img").attr("src", imgSrc);
}
$('.view-photo .view-photo-btns .view-photo-btns__prev').on('click', function () {
    imgNumber--;
    if (imgNumber < 0) {
        imgNumber = allImages.length - 1;
        $('.view-photo-big img').attr('src', allImages[imgNumber].src);
    }
    else {
        $('.view-photo-big img').attr("src", allImages[imgNumber].src);
    }
})
$('.view-photo-btns .view-photo-btns__next').on('click', function () {
    imgNumber++;
    if (imgNumber >= allImages.length) {
        imgNumber = 0;
        $('.view-photo-big img').attr('src', allImages[imgNumber].src);
    }
    else {
        $('.view-photo-big img').attr("src", allImages[imgNumber].src);
    }
})
$(".view-photo__close").on('click', function (e) {
    $(".view-photo").removeClass("show-popup");
})

const background_faq_bg_duck = document.querySelector(".faq-bg-duck");
const duck_bg = document.querySelector(".duck-bg");
const black_wallpaper = document.querySelector(".black_wallpaper");

// window.onscroll = function () {
//     let hash = $(location).attr('hash');

//     if (hash == '#duck1' || hash == '#duck2' || hash == '#duck3' || hash == '#duck4' || hash == '#duck5') {
//         if ($('body').hasClass('second-bg')) {
//             return
//         } else {
//             $('body').addClass('second-bg');
//             $('body').removeClass('faq-bg');
//         }
//     }
//     else if (hash == '#faq-duck' || hash == '#faq' || hash == '#team') {
//         // console.log('teamteam')
//         if ($('body').hasClass('faq-bg')) {
//             return
//         } else {
//             $('body').addClass('faq-bg');
//             $('body').removeClass('second-bg');
//         }
//     }
//     else {
//         $('body').removeClass('faq-bg');
//         $('body').removeClass('second-bg');
//     }
// }

// window.addEventListener('scroll', function () {
//     let hash = $(location).attr('hash');

//     if (hash == '#duck1' || hash == '#duck2' || hash == '#duck3' || hash == '#duck4' || hash == '#duck5') {
//         if ($('body').hasClass('second-bg')) {
//             return
//         } else {
//             $('body').addClass('second-bg');
//             $('body').removeClass('faq-bg');
//         }
//     }
//     else if (hash == '#faq-duck' || hash == '#faq' || hash == '#team') {
//         // console.log('teamteam')
//         if ($('body').hasClass('faq-bg')) {
//             return
//         } else {
//             $('body').addClass('faq-bg');
//             $('body').removeClass('second-bg');
//         }
//     }
//     else {
//         $('body').removeClass('faq-bg');
//         $('body').removeClass('second-bg');
//     }
// });

$.scrollify({
    section: ".block-scroll",
    sectionName: "section-name",
    interstitialSection: ".block-scroll",
    // interstitialSection: "",
    easing: "easeOutExpo",
    // easing: "easeOutCubic",
    scrollSpeed: 1000,
    offset: 0,
    // scrollbars: true,
    standardScrollElements: "",
    // setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll: true,
    before: function () { },
    after: function () {
        let hash = $(location).attr('hash');
        if (hash == "#black_wallpaper" || hash == "#welcome-block" || hash == "#gallery" || hash == "#block_factions" || hash == "#ducks-gallery" || hash == "#faq" || hash == "#faq-duck") {
            nav.style.background = "none";
            blackWallpaper.style.display = "none";
        }
        else {
            nav.style.background = "#5F5F5F";
            // blackWallpaper.style.display = "flex";
            nav.style.backgroundColor = 'rgba(55, 55, 55, 0.63)';
        }
        console.log($(document).scrollTop())
    },
    afterResize: function () { },
    afterRender: function () { }
});

$('#Move_welcome-block').on("click", function () {
    $.scrollify.move("#block_factions");
    console.log("Move_Section3");

});
$('.Move_Section4').on("click", function () {
    $.scrollify.move("#duck1");
    console.log("#section4");
});
$('.Move_Black_wallpaper').on("click", function () {
    $.scrollify.move("#welcome-block");
    console.log("Move_Black_wallpaper");
});
$('.Move_Section10').on("click", function () {
    $.scrollify.move("#faq");
    console.log("Move_Section10");
});
$('.Move_Section12').on("click", function () {
    $.scrollify.move("#team_title");
    console.log("Move_Section12");
});


// $('selector').horizon({ swipe: false });


// console.log($(location).attr('hash'));