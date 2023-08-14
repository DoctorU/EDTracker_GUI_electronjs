const { contextBridge, ipcRenderer } = require('electron');
const channels = require('./ipcChannels');

contextBridge.exposeInMainWorld('electronAPI', {
    requestDevices: () => ipcRenderer.invoke(channels.DEVICES)
})

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }
    for (const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency])
    }
})