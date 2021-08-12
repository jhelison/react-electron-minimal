# Minimal electron react app

This is a minimal files to run a react-electron app for windows.

## How to run?

To run this package, first install modules with `yarn install` and run with `yarn start`.

## How do I build the executable?

To build the executable, run `yarn build` it will build the installer and the exe files.

## How do I acess electron in the project pages?

To acess electron in the project page, use `const electron = window.require("electron")`, the acess the module you want to acess.

Example:

```javascript
const electron = window.require("electron")
var window = electron.remote.getCurrentWindow()
```

## Electron auto updater

To use the electron auto update, add the `GH_TOKEN` as environment variable with your github token.
The repository tag on the package.json also must be changed to your repository. To release a version, use `yarn release`.


**Remember that:** New releases enter github as a draft.
