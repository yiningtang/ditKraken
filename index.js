
var electron = require('electron');


var app = electron.app;
var BrowserWindow =electron.BrowserWindow;

app.on('ready', ()=>{
    var mainWindow = new BrowserWindow({
        width: 1280,
        height: 720
    })
    mainWindow.loadURL('file://' + __dirname + '/index.html');
});

