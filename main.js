// scroll up 
let scrollBtn = document.querySelector(".scroll-up");
window.onscroll = function(){
    if(pageYOffset>= 750){
        scrollBtn.classList.add("showbtn")
    }
    if(pageYOffset<750){
        scrollBtn.classList.remove("showbtn")
    }
}
scrollBtn.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
})
// scroll up 



// image slider
document.querySelectorAll(".slider-container").forEach((slider) => {

    let imgs = slider.querySelectorAll(".images img");
    let imgsArray = Array.from(imgs);
    let sliderLength = imgsArray.length;
    let currentSlide = 1;

    let prev = slider.querySelector(".prev");
    let next = slider.querySelector(".next");
    let closeToggle = slider.querySelector(".close");

    // toggle
    imgsArray.forEach((e) => {
        e.onclick = function () {
            e.parentElement.classList.add("toggle");
            closeToggle.classList.add("show");
        };
    });

    closeToggle.onclick = function () {
        this.parentElement.classList.remove("toggle");
        closeToggle.classList.remove("show");
    };

    prev.onclick = prevBtn;
    next.onclick = nextBtn;

    checker();

    function checker() {
        removeActive();

        imgsArray[currentSlide - 1].classList.add("active");

        if (currentSlide == 1) {
            prev.classList.add("disabled");
        } else {
            prev.classList.remove("disabled");
        }

        if (currentSlide == sliderLength) {
            next.classList.add("disabled");
        } else {
            next.classList.remove("disabled");
        }
    }

    function removeActive() {
        imgsArray.forEach((img) => {
            img.classList.remove("active");
        });
    }

    function nextBtn() {
        if (next.classList.contains("disabled")) {
            return false;
        } else {
            currentSlide++;
            checker();
        }
    }

    function prevBtn() {
        if (prev.classList.contains("disabled")) {
            return false;
        } else {
            currentSlide--;
            checker();
        }
    }

});

// image slider


// show/hide bullets
const jobs = document.querySelectorAll(".job");

jobs.forEach(job => {
    const header = job.querySelector(".job-header");

    header.addEventListener("click", () => {
        job.classList.toggle("active");
    });
});

// show/hide bullets


// video slider
// Video Slider

const videoSlider = document.querySelector(".video-slider");

const videos = videoSlider.querySelectorAll("video");
const videosArray = Array.from(videos);

const prevVideo = videoSlider.querySelector(".prev-video");
const nextVideo = videoSlider.querySelector(".next-video");

let currentVideo = 1;
let videoLength = videosArray.length;

prevVideo.onclick = prevVideoBtn;
nextVideo.onclick = nextVideoBtn;

checkVideo();

function checkVideo() {

    removeActiveVideo();

    videosArray[currentVideo - 1].classList.add("active");

    if (currentVideo === 1) {
        prevVideo.classList.add("disabled");
    } else {
        prevVideo.classList.remove("disabled");
    }

    if (currentVideo === videoLength) {
        nextVideo.classList.add("disabled");
    } else {
        nextVideo.classList.remove("disabled");
    }

}

function removeActiveVideo() {

    videosArray.forEach(video => {
        video.pause();           // إيقاف الفيديو
        video.currentTime = 0;   // الرجوع للبداية
        video.classList.remove("active");
    });

}

function nextVideoBtn() {

    if (nextVideo.classList.contains("disabled")) {
        return;
    }

    currentVideo++;
    checkVideo();

}

function prevVideoBtn() {

    if (prevVideo.classList.contains("disabled")) {
        return;
    }

    currentVideo--;
    checkVideo();

}
// video slider
































// image slider