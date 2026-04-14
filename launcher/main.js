const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const { ipcMain } = require('electron');
const { launchGame } = require('./core/launcher');

ipcMain.handle('launch-game', () => {
  launchGame();
});
function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true
    }
  });

  win.loadFile('./renderer/index.html');
}

app.whenReady().then(createWindow);

const { setActiveVersion } = require('./core/versionManager');

ipcMain.handle('set-version', (e, v) => {
  setActiveVersion(v);
});
