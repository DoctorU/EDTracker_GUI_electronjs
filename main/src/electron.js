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
    console.log('received IPC!');
    console.log('devices:');
    console.log(JSON.stringify(devices, undefined, 2));
    devices =  HID.devices();
    return devices;
  }
  ipcMain.handle(channels.DEVICES, getDevices)

  // ipcMain.handle(channels.DEVICES, async (event) => {
  //   console.log(channels.DEVICES, event);
  //   console.log('Returning "undefined"...');
  //   event.sender.send(channels.DEVICES, undefined);
  // });
});