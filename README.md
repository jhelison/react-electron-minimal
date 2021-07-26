# Minimal electron react app

This is a minimal files to run a react-electron app for windows.

## How to run?

To run this package, first install modules with `yarn install` and run with `yarn start`.

## How do i build the executable?

To build the executable, run `yarn build` it will build the installer and the exe files.

## How do I acess electron in the project pages?

To acess electron in the project page, use `const electron = window.require("electron")`, the acess the module you want to acess.

Exemple:

```javascript
const electron = window.require("electron")
var window = electron.remote.getCurrentWindow()
```