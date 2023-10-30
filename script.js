function playMusic() {
    fetch('/play', { method: 'POST' })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}

function pauseMusic() {
    fetch('/pause', { method: 'POST' })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}

function skipMusic() {
    fetch('/skip', { method: 'POST' })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}
