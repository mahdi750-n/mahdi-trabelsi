function song() {
  const audio = document.getElementById("bgAudio");

  
    audio.volume = 0.5;   // تنجم تنقص أو تزّيد
    audio.play();
}
function playIntro(){
 const intro = document.getElementById("intro");
 if (intro) intro.play();
}

// Server status
fetch("https://api.samp-servers.net/v2/servers/YOUR_SERVER_IP:7777")
.then(res => res.json())
.then(data => {
 const playersEl = document.getElementById("players");
 if (!playersEl) return;
 playersEl.textContent = `Players: ${data.players}/${data.maxplayers}`;
})
.catch(() => {
 const playersEl = document.getElementById("players");
 if (playersEl) playersEl.textContent = "Server Offline";
});

// Form
const form = document.getElementById("applyForm");
if (form) {
 form.addEventListener("submit", e => {
  e.preventDefault();
  alert("Application sent!");
 });
}

// Theme
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

if (toggleBtn) {
 if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️";
 }

 toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  const dark = body.classList.contains("dark");
  localStorage.setItem("theme", dark ? "dark" : "light");
  toggleBtn.textContent = dark ? "☀️" : "🌙";
 });
}

// Anti-bot
const ua = navigator.userAgent.toLowerCase();
if (
 navigator.webdriver ||
 (/bot|crawl|spider|scanner/i.test(ua) &&
  !/googlebot|bingbot/i.test(ua))
) {
 document.body.innerHTML = "";
}

// Basic protection
if (window.innerWidth > 768) {
 document.addEventListener("contextmenu", e => e.preventDefault());

 document.addEventListener("keydown", e => {
  if (
   e.key === "F12" ||
   (e.ctrlKey && e.shiftKey && ["I","J","C"].includes(e.key)) ||
   (e.ctrlKey && e.key === "U")
  ) {
   e.preventDefault();
  }
 });
}
function sonn (){ alert("This page is under maintenance"); }
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_vutbrly",
    "template_0tlyjqh",
    this
  ).then(() => {
    alert("✅ Message sent successfully!");
    this.reset();
  }).catch((error) => {
    alert("❌ Message not sent");
    console.log(error);
  });
});





