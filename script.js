function playIntro(){
 document.getElementById("intro").play();
}

fetch("https://api.samp-servers.net/v2/servers/127.0.0.1:7777")
.then(res => res.json())
.then(data => {
 document.getElementById("players").innerText =
 "Players: " + data.players + "/" + data.maxplayers;
})
.catch(()=> {
 document.getElementById("players").innerText = "Server Offline";
});

document.getElementById("applyForm").addEventListener("submit", e=>{
 e.preventDefault();
 alert("Application sent!");
});
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  }
});

