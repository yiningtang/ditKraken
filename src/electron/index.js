
var electron = require('electron');
var path = require('path')


var app = electron.app;
var BrowserWindow =electron.BrowserWindow;

app.on('ready', ()=>{
    var mainWindow = new BrowserWindow({
    	titleBarStyle: 'hidden',
        width: 1280,
        height: 720,
        icon: __dirname +'/assets/img/apple.png'
    });
    console.log(__dirname, __dirname +'/assets/img/apple.icns');
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.setMenu(null);
});

