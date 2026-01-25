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
