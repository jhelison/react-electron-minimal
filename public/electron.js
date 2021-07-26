const electron = require("electron")
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require("path")
const isDev = require("electron-is-dev")
const { autoUpdater } = require('electron-updater')

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 680,
        frame: true,
        webPreferences: {
            //Necessary for electron modules in scr to work
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    })
    mainWindow.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, "../build/index.html")}`
    )
    mainWindow.on("closed", () => (mainWindow = null))
    
    //Electron-update
    mainWindow.once("ready-to-show", () => {
        autoUpdater.checkForUpdatesAndNotify()
    })
}

app.on("ready", createWindow)
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit()
    }
})
app.on("activate", () => {
    if (mainWindow === null) {
        createWindow()
    }
})

//Passing the version to the main process
electron.ipcMain.on("app_version", (e) => {
    e.sender.send("app_version", { version: app.getVersion() })
})

//Event listeners for autoupdate
autoUpdater.on('update-available', () => {
    mainWindow.webContents.send('update_available')
})
autoUpdater.on('update-downloaded', () => {
    mainWindow.webContents.send('update_downloaded')
})

//Restart when recieved
electron.ipcMain.on("restart_app", () => {
    autoUpdater.quitAndInstall()
})