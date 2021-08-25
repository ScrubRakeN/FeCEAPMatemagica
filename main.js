const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

function createWindow(){

    const win = new BrowserWindow({
        width: 800, 
        height: 600, 
        autoHideMenuBar: true, 
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
    }});

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'src/index.html'),
        protocol: 'file', 
        slashes: true
    }));

    win.webContents.openDevTools();

}

app.whenReady().then( () => {
    createWindow();

    app.on('activate', () => {
        if(BrowserWidow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit();
});


