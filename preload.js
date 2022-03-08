const { ipcRenderer } = require('electron');


ipcRenderer.on('version', function(event, text) {
    console.log(text);
    var field = document.getElementById('version');
    field.textContent = text;
})

ipcRenderer.on('message', function(event, text) {
    var container = document.getElementById('messages');
    var message = document.createElement('div');
    message.innerHTML = text;
    container.appendChild(message);
})


console.log("Hello World!");