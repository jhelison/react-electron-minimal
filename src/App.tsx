import React from 'react'
import './App.css'

import UpdateMessage from './UpdateMessage'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                Electron app with auto update!
                <UpdateMessage />
            </header>
        </div>
    )
}

export default App
