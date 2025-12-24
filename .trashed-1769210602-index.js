const bgVid = document.querySelector("#bgVid");
const intro = document.querySelector(".intro");
const nextBtn = document.querySelector(".nextBtn");
const imageShow = document.querySelector(".imageShow");
const images = document.querySelectorAll(".images");
const mainContent = document.querySelector(".mainContent");
const audio = document.querySelector("audio");


const wishBox = [
     "Merry Christmas! 🎄 Just wanted to say you're the sparkle that makes this holiday season extra bright for me. Hope your day is as amazing as your smile 😊",
     "All I want for Christmas is... well, you know 😉 But seriously, Merry Christmas! Thinking of you and hoping we get to hang out soon.",
     "Merry Christmas to someone who makes my heart jingle all the way 🎅❤️ Hope your holidays are filled with joy (and maybe a little magic from me thinking about you).",
     "The lights are twinkling, the snow is falling (or not!), but nothing shines brighter than the thought of you. Merry Christmas! 😍",
     "If I could ask Santa for one thing this year, it'd be more moments with you. Merry Christmas – you're my favorite kind of holiday cheer! 🎁",
     "Merry Christmas! You've been on my nice list all year... okay, maybe a little naughty too 😉 Hope your day is perfect.",
     "Sending you warm holiday wishes and a secret: you make December feel a whole lot warmer. Merry Christmas! ❤️❄️",
     "Every Christmas song reminds me of you this year. Merry Christmas – let's make some holiday memories together soon? 🎶",
     "Merry Christmas! You're the best gift I didn't even know I was wishing for. Hope your day is magical 🥰",
     "Under the mistletoe or not, I'd steal a kiss from you anytime. Merry Christmas, crush! 😘🎄"
  ]
let loop = 0;

let slider = setInterval(() =>{
  images.forEach(img => img.classList.remove('slideIn'));
  images[loop].classList.toggle('slideIn');
  mainContent.textContent = wishBox[loop];
  loop++;
  if(loop >= images.length){
    loop = 0;
  }
} , 10000);
nextBtn.onclick = () =>{
  audio.play();
  intro.classList.add('hide');
  imageShow.classList.add('show');
  mainContent.classList.add('sshow');
}
bgVid.play();

