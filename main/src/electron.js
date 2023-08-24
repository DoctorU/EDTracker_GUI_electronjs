/* main.js by any other name. */
const path = require('path');
const channels = require('./ipcChannels');
const { app, BrowserWindow, ipcMain } = require('electron');
const isDev = require('electron-is-dev');
const HID = require('node-hid');


const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    }
  });

  // win.loadFile(path.join(__dirname, '../build/index.html'));
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' });
  }
};
/* AKA Main.js in all the demos I've been reading! */
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });
  async function getDevices() {
    devices =  HID.devices();
    console.debug('Devices:', devices.length);
    return devices;
  }

  ipcMain.handle(channels.DEVICES, async (event) => {
    console.debug(Date.now(), channels.DEVICES);
    //wait for 1s, just to test!
    await new Promise(resolve => setTimeout(resolve, 1000));
    const devices = await getDevices();
    return devices;
  });
});