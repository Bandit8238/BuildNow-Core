const { readFileSync } = require('fs');
const path = require('path');
const { BrowserWindow } = require('electron');

function launchGame() {
  const config = JSON.parse(readFileSync('./config.json'));
  const versionPath = path.join(__dirname, '../versions', config.activeVersion, 'version.json');

  const version = JSON.parse(readFileSync(versionPath));

  if (version.type === "web") {
    const gameWindow = new BrowserWindow({
      width: 1280,
      height: 800,
      webPreferences: {
        contextIsolation: true
      }
    });

    gameWindow.loadURL(version.url);
  } else {
    console.log("Unknown version type");
  }
}

module.exports = { launchGame };
