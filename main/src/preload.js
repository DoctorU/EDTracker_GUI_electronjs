const { contextBridge, ipcRenderer } = require('electron');
const channels = require('./ipcChannels');

contextBridge.exposeInMainWorld('electronAPI', {
    requestDevices: () => ipcRenderer.invoke(channels.DEVICES)
})