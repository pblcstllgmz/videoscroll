/* VIDEO SCROLL */

/* ID of canvas */
const canvas = document.getElementById("videoScroll");
const context = canvas.getContext("2d");
/* Número de fotogramas del video || Number of video frames */
const frameCount = 90;
/* Ruta de las imágenes || Root of images */
const currentFrame = index => ( `img/VideoScroll/${index.toString().padStart(4, '0')}.webp` )

const preloadImages = () => {
for (let i = 1; i < frameCount; i++) {
const img = new Image();
img.src = currentFrame(i);
}
};
preloadImages();

const img = new Image()
img.src = currentFrame(1);

/* Tamaño de las imágenes/videos || Size of images/videos */
canvas.width=1920;
canvas.height=1080;

/* Centrar imágenes en pantalla || Centre images on screen */
let centerWidth = (window.innerWidth - canvas.width)/2;
let centerHeight = (window.innerHeight - canvas.height)/2;

img.onload=function(){
context.drawImage(img, centerWidth, centerHeight);
}

let updateImage = index => {
img.src = currentFrame(index);
/* Con esto hay problemas || There are problems with this */
/*context.clearRect(0, 0, canvas.width, canvas.height);*/
context.drawImage(img, centerWidth, centerHeight);
}

/* Actualizar cuando se redimensiona la ventana || Update everything when resizing the window */
window.addEventListener("resize", function() {
location.reload();
});

/*VIDEO SECTION*/
/* Precarga de videos?? || Preload videos?? */

let vBG11 = document.getElementById('vBG1');
let vBG22 = document.getElementById('vBG2');
let vBG33 = document.getElementById('vBG3');
let vBG44 = document.getElementById('vBG4');
/* Centrar videos en pantalla || Centre videos on screen*/
vBG11.style.top = centerHeight + "px";
vBG11.style.left = centerWidth + "px";
vBG22.style.top = centerHeight + "px";
vBG22.style.left = centerWidth + "px";
vBG33.style.top = centerHeight + "px";
vBG33.style.left = centerWidth + "px";
vBG44.style.top = centerHeight + "px";
vBG44.style.left = centerWidth + "px";

window.addEventListener('scroll', () => {  
    let scrollTop = $(this).scrollTop();
    let scrollS2 = window.innerHeight;
    let scrollS3 = window.innerHeight*2;
    let scrollS4 = window.innerHeight*3;
    let vBG1 = $('#vBG1');
    let vBG2 = $('#vBG2');
    let vBG3 = $('#vBG3');
    let vBG4 = $('#vBG4');

    /*VIDEO1 vBG1 SECTION1*/
    if (scrollTop < '1') {
        vBG1.css({ 'opacity': 1 });
    } else if ( scrollTop == '1' ) {
        vBG1.css({ 'opacity': 0 });
    }
    /*VIDEO2 vBG2 SECTION2*/
    if (scrollS2 == scrollTop) {
        vBG2.css({ 'opacity': 1 });
    } else if ( scrollS2 !== scrollTop ) {
        vBG2.css({ 'opacity': 0 });
    }
    /*VIDEO3 vBG3 SECTION3*/
    if (scrollS3 == scrollTop) {
        vBG3.css({ 'opacity': 1 });
    } else if ( scrollS3 !== scrollTop ) {
        vBG3.css({ 'opacity': 0 });
    }
    /*VIDEO4 vBG4 SECTION4*/
    if (scrollS4 == scrollTop) {
        vBG4.css({ 'opacity': 1 });
    } else if ( scrollS4 !== scrollTop ) {
        vBG4.css({ 'opacity': 0 });
    }
    /*VIDEO SCROLL*/
    let html = document.documentElement;
    let maxScrollTop = html.scrollHeight - window.innerHeight;
    let scrollFraction = scrollTop / maxScrollTop;
    let frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
    );

    requestAnimationFrame(() => updateImage(frameIndex + 1));
});

/* Imantar al ancla con la rueda del ratón || Magnet the anchor with the mouse wheel */
/* Solo funciona con la Section 2 y 3 || Only works with Section 2 and 3 
   Los puntos clave los marca 'let difference' || The key points are marked by 'let difference'
   section1 = 0, section2 = 1, section3 = 2, section4 = 3
*/
addEventListener('wheel', () => {
    let scrolling = $(this).scrollTop();
    let screenHeight = window.innerHeight;
    let difference = scrolling / screenHeight;    
    if (difference > 0.5 &&  difference < 1.25){
        window.scrollTo(0, screenHeight);
    }
    else if (difference > 1.5 &&  difference < 2.25){
        window.scrollTo(0, screenHeight*2);
    }
});