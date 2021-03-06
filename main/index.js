// const { addBypassChecker } = require("electron-compile");

// addBypassChecker((filePath) => {
//   return (
//     filePath.indexOf(app.getAppPath()) === -1 &&
//     (/.jpg/.test(filePath) || /.ms/.test(filePath) || /.png/.test(filePath))
//   );
// });

// const prepareRenderer = require('electron-next')

// Native
const { join } = require("path");
const { format } = require("url");

// Packages
const { BrowserWindow, app, ipcMain } = require("electron");
const isDev = require("electron-is-dev");
const prepareRenderer = require("electron-next");

// Prepare the renderer once the app is ready
app.on("ready", async () => {
  await prepareRenderer("./renderer");

  const mainWindow = new BrowserWindow({
    width: 950,
    height: 740,
    icon: join(__dirname, "../renderer/public/icons/logo.ico"),
    webPreferences: {
      nodeIntegration: false,
      preload: join(__dirname, "preload.js"),
    },
  });

  mainWindow.setMenuBarVisibility(false);

  const url = isDev
    ? "http://localhost:8000"
    : format({
        pathname: join(__dirname, "../renderer/out/index.html"),
        protocol: "file:",
        slashes: true,
      });

  mainWindow.loadURL(url);
});

// Quit the app once all windows are closed
app.on("window-all-closed", app.quit);

// listen the channel `message` and resend the received message to the renderer process
ipcMain.on("message", (event, message) => {
  event.sender.send("message", message);
});
