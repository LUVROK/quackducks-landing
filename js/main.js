let numberZero, numberOne, numberTwo, numberThree, numberFour, numberFive;
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
    let team = document.getElementById("section12");

    let pagepiling = document.getElementById('welcome-block-content-id');
    let position1 = block_factions.getBoundingClientRect();
    let bottom1 = position1.bottom;
    let top1 = position1.top;
    let center1 = ((bottom1 - top1) / 2) + top1;
    // console.log(top1)
    pagepiling.style.minHeight = `${top1}px`;
    let position2 = ducks_gallery.getBoundingClientRect();
    let bottom2 = position2.bottom;
    let top2 = position2.top;
    let center2 = ((bottom2 - top2) / 2) + top2;

    let position3 = team.getBoundingClientRect();
    let top3 = position3.top;
    // console.log('top3 - ', position3.top);



    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        numberZero = 0 + "%";
        numberOne = 40 + "%";
        numberTwo = 80 + "%";
        numberThree = 120 + "%";
        numberFour = -40 + "%";
        numberFive = 160 + "%";

        document.querySelector("#team_img_1").classList.add('team_png_1');
        document.querySelector("#team_img_2").classList.add('team_png_2');
        document.querySelector("#team_img_3").classList.add('team_png_3');
        document.querySelector("#team_img_4").classList.add('team_png_4');
        document.querySelector("#team_img_5").classList.add('team_png_5');

        //    transition: 2s;

        // document.querySelector(".nav_background__left").classList.add('team_png_4');
        // document.querySelector(".nav_background__center").classList.add('team_png_4');
        // document.querySelector(".nav_background__right").classList.add('team_png_4');
        // document.querySelector(".nav_background__top").classList.add('team_png_4');


        $.scrollify({
            section: ".block-scroll-mobile",
            sectionName: "section-name",
            interstitialSection: ".block-scroll-mobile",
            // standardScrollElements: 'TheTeam',
            // interstitialSection: "",
            // easing: "easeOutExpo",
            // easing: "easeOutCubic",
            scrollSpeed: 1000,
            offset: 0,
            scrollbars: true,
            standardScrollElements: "",
            // setHeights: true,
            overflowScroll: true,
            updateHash: true,
            touchScroll: true,
            before: function () { },
            after: function () {
                // let hash = $(location).attr('hash');
                // if (hash == "#black_wallpaper" || hash == "#welcome-block" || hash == "#gallery" || hash == "#block_factions" || hash == "#ducks-gallery" || hash == "#faq" || hash == "#faq-duck") {
                //     nav.style.background = "none";
                //     blackWallpaper.style.display = "none";
                // }
                // else {
                //     nav.style.background = "#5F5F5F";
                //     nav.style.transition = '.2s';
                //     // blackWallpaper.style.display = "flex";
                //     nav.style.backgroundColor = 'rgba(55, 55, 55, 0.63)';
                // }
                // console.log($(document).scrollTop())
            },
            afterResize: function () { },
            afterRender: function () { }
        });
    } else {
        numberZero = 0 + "%";
        numberOne = 40 + "%";
        numberTwo = 80 + "%";
        numberThree = 120 + "%";
        numberFour = -40 + "%";
        numberFive = 160 + "%";

        let elem = document.querySelector("#mobileTeam");
        // console.log(elem);
        elem.remove();
        document.querySelector('#section12').innerHTML = '<div class="team-container block-scroll" data-section-name="TheTeam" id="WebTeam"><div class="team__title">THE TEAM</div><div class="team-all disactiveTeam"><div class="team-all-one"><div class="team-all-one__img"><img src="img/team1.png" alt=""></div><div class="team-all-one__name">ALEX</div></div><div class="team-all-one"><div class="team-all-one__img"><img src="img/team2.png" alt=""></div><div class="team-all-one__name">RUZILl</div></div><div class="team-all-one"><div class="team-all-one__img"><img src="img/team3.png" alt=""></div><div class="team-all-one__name">MARIA</div></div><div class="team-all-one"><div class="team-all-one__img"><img src="img/team1.png" alt=""></div><div class="team-all-one__name">NUREX</div></div><div class="team-all-one"><div class="team-all-one__img"><img src="img/team2.png" alt=""></div><div class="team-all-one__name">TIM</div></div> </div></div></div>';
        // document.querySelector("#section13").classList.add('activeTeam');
        // document.querySelector("#section14").classList.add('activeTeam');
        // document.querySelector("#section15").classList.add('activeTeam');

        $.scrollify({
            section: ".block-scroll",
            sectionName: "section-name",
            interstitialSection: ".block-scroll",
            // standardScrollElements: 'TheTeam',
            // interstitialSection: "",
            easing: "easeOutExpo",
            // easing: "easeOutCubic",
            scrollSpeed: 1000,
            offset: 0,
            scrollbars: true,
            standardScrollElements: "",
            // setHeights: true,
            overflowScroll: true,
            updateHash: true,
            touchScroll: true,
            before: function () { },
            after: function () {
                let hash = $(location).attr('hash');
                if (hash == "#black_wallpaper" || hash == "#welcome-block" || hash == "#gallery" || hash == "#block_factions" || hash == "#ducks-gallery" || hash == "#faq" || hash == "#faq-duck") {
                    // nav.style.background = "none";
                    blackWallpaper.style.display = "none";
                }
                else {
                    // nav.style.background = "#5F5F5F";
                    // blackWallpaper.style.display = "flex";
                    // nav.style.backgroundColor = 'rgba(55, 55, 55, 0.63)';
                }
                // console.log($(document).scrollTop())
            },
            afterResize: function () { },
            afterRender: function () { }
        });
    }

    // var back_link = document.getElementById('back-link');

    // back_link.setAttribute('href', document.referrer);

    // back_link.onclick = function () {
    //     history.back();
    //     return false;
    // }

    // console.log("block_factions top1 - " + top1)
    // console.log("block_factions bottom1 - " + bottom1)
    // console.log("block_factions center1 - " + center1)
    // console.log("ducks_gallery top2 - " + top2)
    // console.log("ducks_gallery bottom2 - " + bottom2)
    // console.log("ducks_gallery center2 - " + center2)

    window.addEventListener('scroll', function () {
        let hash = $(location).attr('hash');

        if ($(document).scrollTop() >= center1 && $(document).scrollTop() < center2) {
            nav.style.background = "#5F5F5F";
            nav.style.transition = '.2s';
            nav.style.backgroundColor = 'rgba(55, 55, 55, 0.63)';
            // console.log("scrollTop")
            if ($('body').hasClass('second-bg')) {
                return
            } else {
                $('body').addClass('second-bg');
                $('body').removeClass('faq-bg');
            }
        }
        else if ($(document).scrollTop() > center2 && $(document).scrollTop() <= (top3 - 110)) {
            nav.style.background = "none";
            // blackWallpaper.style.display = "none";
            if ($('body').hasClass('faq-bg')) {
                return
            } else {
                $('body').addClass('faq-bg');
                $('body').removeClass('second-bg');
            }
        }
        else if ($(document).scrollTop() >= (top3 - 100)) {
            nav.style.background = "#5F5F5F";
            nav.style.transition = '.2s';
            nav.style.backgroundColor = 'rgba(55, 55, 55, 0.63)';

        }
        else {
            nav.style.background = "none";
            // blackWallpaper.style.display = "none";
            // if ($('body').hasClass('second-bg') || $('body').hasClass('faq-bg')) {
            $('body').removeClass('second-bg');
            $('body').removeClass('faq-bg');
            // } else {
            //     return;
            // }
        }
    })
}


// window.addEventListener('resize', start);
// function start() {
//     if (document.documentElement.clientWidth <= 920) {

//     }
// }

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



/*
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

let carusel = 0;
let caruselBack = 0;
let permissionBig = 1880;
let permissionLarge = 1400;
let permissionMedium = 1000;
let permissionSmall = 880;
let newNumber = 0;
let newNumberOne = 0;
// ducksImgBack.onclick = ducksImgSliderBack ();
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
        numberOne = 40 + "%";
        numberTwo = 80 + "%";
        numberThree = 120 + "%";
        numberFour = -40 + "%";
        numberFive = 160 + "%";
    }
    else if (window.outerWidth <= permissionLarge && window.outerWidth >= permissionMedium) {
        numberZero = 0 + "%";
        numberOne = 40 + "%";
        numberTwo = 80 + "%";
        numberThree = 120 + "%";
        numberFour = -40 + "%";
        numberFive = 160 + "%";
    }
    else if (window.outerWidth < permissionMedium && window.outerWidth > permissionSmall) {
        numberZero = 0 + "%";
        numberOne = 40 + "%";
        numberTwo = 80 + "%";
        numberThree = 120 + "%";
        numberFour = -40 + "%";
        numberFive = 160 + "%";
    }
    else if (window.outerWidth <= permissionSmall) {
        numberZero = -30 + "%";
        numberOne = 50 + "%";
        numberTwo = 130 + "%";
        numberThree = 200 + "%";
        numberFour = -120 + "%";
        numberFive = 280 + "%";
    }
    newNumber++;
    //5 1 !2-6 3 4
    //1 2 !3-5 4 6
    //2 3 !4-1 6 1
    //5 1 !2-6 3 4
    //5 1 !2-6 3 4
    //5 1 !2-6 3 4

    //4 0 !1-5 2 3 
    //0 1 !2-4 3 5
    //1 2 !3-0 5 4
    //2 3 !5-1 4 0
    //3 5 !4-2 0 1
    //5 4 !0-3 1 2

    if (caruselBack == 0) {
        for (let i = 0; i < 6; i++) {
            ducksImg[i].classList.remove('active');
            contentTextBox[i].classList.remove('active');
            ducksBlock[i].classList.remove('active');
            ducksBlock[i].style.transition = "1.3s";
        }
        ducksImg[2].classList.add('active');
        contentTextBox[2].classList.add('active');
        ducksBlock[2].classList.add('active');

        ducksBlock[4].style.transition = "none";

        ducksBlock[0].style.left = numberFour;
        ducksBlock[1].style.left = numberZero;
        ducksBlock[2].style.left = numberOne;
        ducksBlock[3].style.left = numberTwo;
        ducksBlock[4].style.left = numberFive;
        ducksBlock[5].style.left = numberThree;
        caruselBack++;
    }
    else if (caruselBack == 1) {
        for (let i = 0; i < 6; i++) {
            ducksImg[i].classList.remove('active');
            contentTextBox[i].classList.remove('active');
            ducksBlock[i].classList.remove('active');
            ducksBlock[i].style.transition = "1.3s";
        }
        ducksImg[3].classList.add('active');
        contentTextBox[3].classList.add('active');
        ducksBlock[3].classList.add('active');

        ducksBlock[0].style.transition = "none";

        ducksBlock[0].style.left = numberFive;
        ducksBlock[1].style.left = numberFour;
        ducksBlock[2].style.left = numberZero;
        ducksBlock[3].style.left = numberOne;
        ducksBlock[4].style.left = numberThree;
        ducksBlock[5].style.left = numberTwo;
        caruselBack++;
    }
    else if (caruselBack == 2) {
        for (let i = 0; i < 6; i++) {
            ducksImg[i].classList.remove('active');
            contentTextBox[i].classList.remove('active');
            ducksBlock[i].classList.remove('active');
            ducksBlock[i].style.transition = "1.3s";
        }
        ducksImg[5].classList.add('active');
        contentTextBox[5].classList.add('active');
        ducksBlock[5].classList.add('active');

        ducksBlock[1].style.transition = "none";

        ducksBlock[0].style.left = numberThree;
        ducksBlock[1].style.left = numberFive;
        ducksBlock[2].style.left = numberFour;
        ducksBlock[3].style.left = numberZero;
        ducksBlock[4].style.left = numberTwo;
        ducksBlock[5].style.left = numberOne;

        caruselBack++;
    }
    else if (caruselBack == 3) {
        for (let i = 0; i < 6; i++) {
            ducksImg[i].classList.remove('active');
            contentTextBox[i].classList.remove('active');
            ducksBlock[i].classList.remove('active');
            ducksBlock[i].style.transition = "1.3s";
        }
        ducksImg[5].classList.remove('active');
        contentTextBox[5].classList.remove('active');
        ducksBlock[5].classList.remove('active');
        ducksImg[4].classList.add('active');
        contentTextBox[4].classList.add('active');
        ducksBlock[4].classList.add('active');

        ducksBlock[2].style.transition = "none";

        ducksBlock[0].style.left = numberTwo;
        ducksBlock[1].style.left = numberThree;
        ducksBlock[2].style.left = numberFive;
        ducksBlock[3].style.left = numberFour;
        ducksBlock[4].style.left = numberOne;
        ducksBlock[5].style.left = numberZero;

        caruselBack++;
    }
    else if (caruselBack == 4) {
        for (let i = 0; i < 6; i++) {
            ducksImg[i].classList.remove('active');
            contentTextBox[i].classList.remove('active');
            ducksBlock[i].classList.remove('active');
            ducksBlock[i].style.transition = "1.3s";
        }
        ducksImg[0].classList.add('active');
        contentTextBox[0].classList.add('active');
        ducksBlock[0].classList.add('active');

        ducksBlock[3].style.transition = "none";

        ducksBlock[0].style.left = numberOne;
        ducksBlock[1].style.left = numberTwo;
        ducksBlock[2].style.left = numberThree;
        ducksBlock[3].style.left = numberFive;
        ducksBlock[4].style.left = numberZero;
        ducksBlock[5].style.left = numberFour;

        caruselBack++;
    }
    else if (caruselBack == 5) {
        for (let i = 0; i < 6; i++) {
            ducksImg[i].classList.remove('active');
            contentTextBox[i].classList.remove('active');
            ducksBlock[i].classList.remove('active');
            ducksBlock[i].style.transition = "1.3s";
        }
        ducksImg[1].classList.add('active');
        contentTextBox[1].classList.add('active');
        ducksBlock[1].classList.add('active');

        ducksBlock[5].style.transition = "none";

        ducksBlock[0].style.left = numberZero;
        ducksBlock[1].style.left = numberOne;
        ducksBlock[2].style.left = numberTwo;
        ducksBlock[3].style.left = numberThree;
        ducksBlock[4].style.left = numberFour;
        ducksBlock[5].style.left = numberFive;

        caruselBack = 0;
    }
    caruselkNull();
    console.log("carusel1 - " + carusel)
    console.log("caruselBack1 - " + caruselBack)
}

ducksImgBack.addEventListener("click", ducksImgSliderNext);
// ducksImgNext.onclick = ducksImgSliderNext ();
function ducksImgSliderNext() {
    newNumberOneNull();
    ducksImgBack.style.display = "none";
    ducksImgNext.style.display = "none";
    setTimeout(function () {
        ducksImgBack.style.display = "flex";
        ducksImgNext.style.display = "flex";
    }, 1000);
    if (window.outerWidth > permissionLarge && window.outerWidth < permissionBig) {
        numberZero = 0 + "%";
        numberOne = 40 + "%";
        numberTwo = 80 + "%";
        numberThree = 120 + "%";
        numberFour = -40 + "%";
        numberFive = 160 + "%";
    }
    else if (window.outerWidth <= permissionLarge && window.outerWidth >= permissionMedium) {
        numberZero = 0 + "%";
        numberOne = 40 + "%";
        numberTwo = 80 + "%";
        numberThree = 120 + "%";
        numberFour = -40 + "%";
        numberFive = 160 + "%";
    }
    else if (window.outerWidth < permissionMedium && window.outerWidth > permissionSmall) {
        numberZero = 0 + "%";
        numberOne = 40 + "%";
        numberTwo = 80 + "%";
        numberThree = 120 + "%";
        numberFour = -40 + "%";
        numberFive = 160 + "%";
    }
    else if (window.outerWidth <= permissionSmall) {
        numberZero = -30 + "%";
        numberOne = 50 + "%";
        numberTwo = 130 + "%";
        numberThree = 200 + "%";
        numberFour = -120 + "%";
        numberFive = 280 + "%";
    }
    newNumber++;
    //4 0 !1 2 3 5
    //5 4 !0 1 2 3
    //1 2 !3 5 4 0
    //2 3 !5 4 0 1
    //3 5 !4 0 1 2
    //5 4 !0 1 2 3
    // ducksBlock[0].style.display = "flex";
    // ducksBlock[1].style.display = "flex";
    // ducksBlock[2].style.display = "flex";
    // ducksBlock[3].style.display = "flex";
    // ducksBlock[4].style.display = "flex";
    // ducksBlock[5].style.display = "flex";

    if (carusel == 0) {
        for (let i = 0; i < 6; i++) {
            ducksImg[i].classList.remove('active');
            contentTextBox[i].classList.remove('active');
            ducksBlock[i].classList.remove('active');
            ducksBlock[i].style.transition = "1.3s";
        }
        ducksImg[0].classList.add('active');
        contentTextBox[0].classList.add('active');
        ducksBlock[0].classList.add('active');
        ducksBlock[5].style.transition = "none";

        ducksBlock[0].style.left = numberOne;
        ducksBlock[1].style.left = numberTwo;
        ducksBlock[2].style.left = numberThree;
        ducksBlock[3].style.left = numberFive;
        ducksBlock[4].style.left = numberZero;
        ducksBlock[5].style.left = numberFour;

        carusel++;
    }
    //4 0 !1 2 3 5 
    //5 4 !0 1 2 3
    //3 5 !4 0 1 2
    //2 3 !5 4 0 1
    //1 2 !3 5 4 0
    //0 1 !2 3 5 4
    else if (carusel == 1) {
        for (let i = 0; i < 6; i++) {
            ducksImg[i].classList.remove('active');
            contentTextBox[i].classList.remove('active');
            ducksBlock[i].classList.remove('active');
            ducksBlock[i].style.transition = "1.3s";
        }
        ducksImg[4].classList.add('active');
        contentTextBox[4].classList.add('active');
        ducksBlock[4].classList.add('active');
        ducksBlock[3].style.transition = "none";

        ducksBlock[0].style.left = numberTwo;
        ducksBlock[1].style.left = numberThree;
        ducksBlock[2].style.left = numberFive;
        ducksBlock[3].style.left = numberFour;
        ducksBlock[4].style.left = numberOne;
        ducksBlock[5].style.left = numberZero;

        carusel++;
    }
    else if (carusel == 2) {
        for (let i = 0; i < 6; i++) {
            ducksImg[i].classList.remove('active');
            contentTextBox[i].classList.remove('active');
            ducksBlock[i].classList.remove('active');
            ducksBlock[i].style.transition = "1.3s";
        }
        ducksImg[5].classList.add('active');
        contentTextBox[5].classList.add('active');
        ducksBlock[5].classList.add('active');
        ducksBlock[2].style.transition = "none";

        ducksBlock[0].style.left = numberThree;
        ducksBlock[1].style.left = numberFive;
        ducksBlock[2].style.left = numberFour;
        ducksBlock[3].style.left = numberZero;
        ducksBlock[4].style.left = numberTwo;
        ducksBlock[5].style.left = numberOne;
        carusel++;
    }
    else if (carusel == 3) {
        for (let i = 0; i < 6; i++) {
            ducksImg[i].classList.remove('active');
            contentTextBox[i].classList.remove('active');
            ducksBlock[i].classList.remove('active');
            ducksBlock[i].style.transition = "1.3s";
        }
        ducksImg[3].classList.add('active');
        contentTextBox[3].classList.add('active');
        ducksBlock[3].classList.add('active');
        ducksBlock[1].style.transition = "none";

        ducksBlock[0].style.left = numberFive;
        ducksBlock[1].style.left = numberFour;
        ducksBlock[2].style.left = numberZero;
        ducksBlock[3].style.left = numberOne;
        ducksBlock[4].style.left = numberThree;
        ducksBlock[5].style.left = numberTwo;
        carusel++;
    }
    else if (carusel == 4) {
        for (let i = 0; i < 6; i++) {
            ducksImg[i].classList.remove('active');
            contentTextBox[i].classList.remove('active');
            ducksBlock[i].classList.remove('active');
            ducksBlock[i].style.transition = "1.3s";
        }
        ducksImg[2].classList.add('active');
        contentTextBox[2].classList.add('active');
        ducksBlock[2].classList.add('active');
        ducksBlock[0].style.transition = "none";

        ducksBlock[0].style.left = numberFour;
        ducksBlock[1].style.left = numberZero;
        ducksBlock[2].style.left = numberOne;
        ducksBlock[3].style.left = numberTwo;
        ducksBlock[4].style.left = numberFive;
        ducksBlock[5].style.left = numberThree;
        carusel++;
    }
    //4 0 !1-5 2 3
    //5 4 !0-3 1 2
    //3 5 !4-2 0 1 
    //2 3 !5-1 4 0 
    //1 2 !3-0 5 4 
    //0 1 !2-4 3 5 !
    //
    else if (carusel == 5) {
        for (let i = 0; i < 6; i++) {
            ducksImg[i].classList.remove('active');
            contentTextBox[i].classList.remove('active');
            ducksBlock[i].classList.remove('active');
            ducksBlock[i].style.transition = "1.3s";
        }
        ducksImg[1].classList.add('active');
        contentTextBox[1].classList.add('active');
        ducksBlock[1].classList.add('active');
        ducksBlock[4].style.transition = "none";

        ducksBlock[0].style.left = numberZero;
        ducksBlock[1].style.left = numberOne;
        ducksBlock[2].style.left = numberTwo;
        ducksBlock[3].style.left = numberThree;
        ducksBlock[4].style.left = numberFour;
        ducksBlock[5].style.left = numberFive;
        carusel = 0;
    }
    // numberZero = 0 +"%";
    // numberOne = 40 +"%";
    // numberTwo = 80 +"%";
    caruselBackNull();
    console.log("carusel2 - " + carusel)
    console.log("caruselBack2 - " + caruselBack)
}


function newNumberNull() {
    if (newNumber == 0) {
        newNumberOne = 1;
    }
    else if (newNumber == 1) {
        newNumberOne = 5;
    }
    else if (newNumber == 2) {
        newNumberOne = 4;
    }
    else if (newNumber == 3) {
        newNumberOne = 3;
    }
    else if (newNumber == 4) {
        newNumberOne = 2;
    }
    else if (newNumber == 5) {
        newNumberOne = 1;
    }
};

function newNumberOneNull() {
    if (newNumberOne == 0) {
        newNumber = 0;
    }
    else if (newNumberOne == 1) {
        newNumber = 5;
    }
    else if (newNumberOne == 2) {
        newNumber = 4;
    }
    else if (newNumberOne == 3) {
        newNumber = 3;
    }
    else if (newNumberOne == 4) {
        newNumber = 2;
    }
    else if (newNumberOne == 5) {
        newNumber = 1;
    }
};

function caruselBackNull() {
    if (carusel == 0) {
        caruselBack = 0;
    }
    else if (carusel == 1) {
        caruselBack = 5;
    }
    else if (carusel == 2) {
        caruselBack = 4;
    }
    else if (carusel == 3) {
        caruselBack = 3;
    }
    else if (carusel == 4) {
        caruselBack = 2;
    }
    else if (carusel == 5) {
        caruselBack = 1;
    }
};

function caruselkNull() {
    if (caruselBack == 0) {
        carusel = 0;
    }
    else if (caruselBack == 1) {
        carusel = 5;
    }
    else if (caruselBack == 2) {
        carusel = 4;
    }
    else if (caruselBack == 3) {
        carusel = 3;
    }
    else if (caruselBack == 4) {
        carusel = 2;
    }
    else if (caruselBack == 5) {
        carusel = 1;
    }
};



const tuchScreen = document.querySelector(".faction_content_body");
tuchScreen.addEventListener('touchstart', handleTouchStart, false);
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
        if (element.id === "box_duckOne_img_2") {
            // console.log(element.id)
            // element2.classList.add('box-active');
        }
        else {
            element2.classList.remove('box-active');
        }
        // elementsArray[activeElement - 1].classList.remove('box-active')
        // console.log(elementsArray[activeElement - 1])
        // console.log(element.id)
        // boxGaaler2.classList.remove('box-unactive');
        // element.style.flex = '1 1 20%';

    });
    element.addEventListener('mouseleave', e => {
        // boxGaaler2.classList.add('box-unactive');
        element.classList.remove('box-active');
        if (element.id === "box_duckOne_img_2") {
            // element2.classList.add('box-active');
        }
        else {
            // element2.classList.add('box-active');
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

















// faqDusksSmallBox.onmouseover =
function sliderUp() {
    faqDusksSection.classList.add("active");
    smallBoxImg.style.zIndex = "1";
    // console.log("yes");
    faqDusksSmallBox.classList.add("active");
}


var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});


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

$('#Move_welcome-block').on("click", function () {
    $.scrollify.move("#block_factions");
    // console.log("Move_Section3");

});
$('.Move_Section4').on("click", function () {
    $.scrollify.move("#duck1");
    // console.log("#section4");
});
$('.Move_Black_wallpaper').on("click", function () {
    $.scrollify.move("#welcome-block");
    // console.log("Move_Black_wallpaper");
});
$('.Move_Section10').on("click", function () {
    $.scrollify.move("#faq");
    // console.log("Move_Section10");
});
$('.Move_Section12').on("click", function () {
    $.scrollify.move("#team_title");
    // console.log("Move_Section12");
});

// $('li').click(function() {
//     $.scrollify.move('#' + $(this).attr('id'))
// })


// $('selector').horizon({ swipe: false });


// console.log($(location).attr('hash'));