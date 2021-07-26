import React, { useEffect, useState } from "react"

const electron = window.require("electron")

const ipcRenderer = electron.ipcRenderer

const UpdateMessage = (props) => {
    const [version, setVersion] = useState("")
    const [updateMessage, setUpdateMessage] = useState("No update available")

    useEffect(() => {
        getAppVersion()
        getUpdateStatus()
    }, [])

    const getAppVersion = () => {
        ipcRenderer.send("app_version")
        ipcRenderer.on("app_version", (e, arg) => {
            ipcRenderer.removeAllListeners("app_version")
            setVersion("Version " + arg.version)
        })
    }

    const getUpdateStatus = () => {
        ipcRenderer.on("update_available", () => {
            ipcRenderer.removeAllListeners("update_available")
            setUpdateMessage("A new update is available!")
        })

        ipcRenderer.on("update_downloaded", () => {
            ipcRenderer.removeAllListeners("update_downloaded")
            setUpdateMessage("Update downloaded. Restart now?")
        })
    }

    const restartApp = () => {
        ipcRenderer.send("restart_app")
    }

    return (
        <React.Fragment>
            <h3>New realease</h3>
            <h3>{version}</h3>
            <h3>{updateMessage}</h3>
            {updateMessage === "Update downloaded. Restart now?" ? (
                <button onClick={restartApp}>Reiniciar</button>
            ) : null}
        </React.Fragment>
    )
}

export default UpdateMessage
