document.getElementById("play").addEventListener("click", function() {
    // Send a request to play music on your PC
    fetch("/play", { method: "POST" });
});

document.getElementById("pause").addEventListener("click", function() {
    // Send a request to pause music on your PC
    fetch("/pause", { method: "POST" });
});

document.getElementById("skip").addEventListener("click", function() {
    // Send a request to skip music on your PC
    fetch("/skip", { method: "POST" });
});
