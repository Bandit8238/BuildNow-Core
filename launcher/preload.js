const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('launcherAPI', {
  checkUpdates: () => ipcRenderer.invoke('check-updates'),
  getVersions: () => ipcRenderer.invoke('get-versions'),
  loadMods: () => ipcRenderer.invoke('load-mods'),
  runPlugins: () => ipcRenderer.invoke('run-plugins')
});
