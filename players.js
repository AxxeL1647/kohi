document.addEventListener('DOMContentLoaded', function() {
    const playersOnlineElement = document.getElementById('players-online');

    const serverIP = 'motionpractice.net';
    const port = '19132';
    const apiUrl = `https://api.mcsrvstat.us/bedrock/2/${serverIP}:${port}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {

            if (data.online) {
                playersOnlineElement.textContent = `Players Online: ${data.players.online}`;
            } else {
                playersOnlineElement.textContent = 'Server Offline';
            }
        })
        .catch(error => {
            console.error('Error al obtener los jugadores conectados:', error);
            playersOnlineElement.textContent = 'Error al obtener el estado del servidor';
        });
});