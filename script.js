// =======================
// Wedding Invitation JS
// By Miraj
// =======================

// Intro Button
const intro = document.getElementById("intro");
const main = document.getElementById("main");
const enterBtn = document.getElementById("enterBtn");

main.style.display = "none";

enterBtn.addEventListener("click", () => {
    intro.style.display = "none";
    main.style.display = "block";

    document.body.style.overflowY = "auto";
});

// Scratch / Reveal
const scratchBtn = document.getElementById("scratchBtn");
const hiddenMessage = document.getElementById("hiddenMessage");

hiddenMessage.style.display = "none";

scratchBtn.addEventListener("click", () => {

    hiddenMessage.style.display = "block";

    scratchBtn.innerHTML = "✔ Revealed";

    scratchBtn.disabled = true;

});

// =======================
// Countdown
// =======================

// Change your wedding date here
const weddingDate = new Date("February 9, 2027 08:00:00").getTime();

function countdown(){

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if(distance <= 0){

        document.getElementById("timer").innerHTML =
        "<h2>🎉 Alhamdulillah! Wedding Day Has Arrived 🎉</h2>";

        return;
    }

    const days = Math.floor(distance / (1000*60*60*24));

    const hours = Math.floor(
        (distance % (1000*60*60*24)) /
        (1000*60*60)
    );

    const minutes = Math.floor(
        (distance % (1000*60*60)) /
        (1000*60)
    );

    const seconds = Math.floor(
        (distance % (1000*60)) /
        1000
    );

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}

countdown();

setInterval(countdown,1000);

// =======================
// Fade Animation
// =======================

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});

// =======================
// Floating Hearts
// =======================

setInterval(()=>{

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-30px";

    heart.style.fontSize=(20+Math.random()*20)+"px";

    heart.style.animation="floatHeart 6s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },6000);

},800);

// =======================
// Console Message
// =======================

console.log("Wedding Invitation Website Loaded Successfully");