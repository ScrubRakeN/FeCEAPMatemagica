const {app, BrowserWindow} = require('electron');
const ipcMain = require('electron').ipcMain;
const path = require('path');
const url = require('url');

function createLoginWindow(){

    const win = new BrowserWindow({
        width: 1500, 
        height: 900, 
        autoHideMenuBar: true, 
        title: 'Matemagica - SiginIn/SignUp',
        webPreferences: {
            preload: path.join(__dirname, 'preloadSignInSignUp.js'),
    }});

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'src/SignInSignUp.html'),
        protocol: 'file', 
        slashes: true
    }));

    win.webContents.openDevTools();

}

function createMainWindow(){

    const win = new BrowserWindow({
        width: 1500,
        height: 900,
        autoHideMenuBar: true,
        title: 'Menu - Game Selection',
        webPreferences: {
            preload: path.join(__dirname, 'preloadMainPage.js'),
        }
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'src/mainPage.html'),
        protocol: 'file',
        slashes: true
    }));

}

app.whenReady().then( () => {
    createLoginWindow();

    app.on('activate', () => {
        if(BrowserWidow.getAllWindows().length === 0) createLoginWindow();
    });
});

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit();
});

ipcMain.on('mainPage', () =>{
    createMainWindow();
    BrowserWindow.getAllWindows()[1].close();
});

