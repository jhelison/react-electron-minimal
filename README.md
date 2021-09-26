<h3 align="center">
	Minimal electron react app
</h3>
<p align="center">
	This is a minimal files to run a react-electron app for windows.
</p>
<div align="center">
	<img src="https://img.shields.io/badge/Electron-2B2E3A?style=for-the-badge&logo=electron&logoColor=9FEAF9" />
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
</div>

# Table of Contents

- [Description](#description)
  * [In the box](#in-the-box)
  * [How to run?](#how-to-run-)
  * [How do I build the executable?](#how-do-i-build-the-executable-)
  * [How do I acess electron in the project pages?](#how-do-i-acess-electron-in-the-project-pages-)
  * [Electron auto updater](#electron-auto-updater)
- [License](#license)

# Description

This is a minimal files to run a react-electron app for windows.

## In the box

-   <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
-   <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" />
-   <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" />


-   <img src="https://badgen.net/badge/styled-components/v5.3.1/green" />
-   <img src="https://badgen.net/badge/axios/v0.21.1/green" />
-   <img src="https://badgen.net/badge/electron-updater/v4.3.9/green" />

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

# License

MIT ©
