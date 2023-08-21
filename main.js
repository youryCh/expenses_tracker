const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    icon: path.join(__dirname, '/asset/main.ico')
  });

  win.loadFile('index.html');
};

app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong');
  createWindow();
});
