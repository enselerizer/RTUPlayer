const { app, BrowserWindow } = require('electron')
const url = require("url");
const path = require("path");

let win;

function createWindow() {
  appWindow = new BrowserWindow({

    webPreferences: {
      nodeIntegration: true
    },

    resizable: true,
    icon: __dirname + "/img/logo.png",
    autoHideMenuBar: true,
    frame: false,
    fullscreen: true
  });

  // Electron Build Path
  appWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/RTUPlayer/index.html`),
      protocol: "file:",
      slashes: true
    })
  );

  // Initialize the DevTools.
  appWindow.webContents.openDevTools();

  appWindow.on("closed", function() {
    appWindow = null;
  });
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})
