import { app, BrowserWindow } from "electron";

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
export const MAIN_WINDOW_ENTRY_POINT = MAIN_WINDOW_WEBPACK_ENTRY;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    height: 700,
    width: 900,
    webPreferences: { preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY },
  });
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  // mainWindow.webContents.openDevTools();
  mainWindow.on("close", mainWindow.destroy);
  process.on("SIGINT", app.quit);
});

app.on("window-all-closed", app.quit);
