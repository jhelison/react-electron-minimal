import React from 'react'
import styled from 'styled-components'

import UpdateMessage from './UpdateMessage'

const ContainerApp = styled.div`
    text-align: center;
`

const AppHeader = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`

function App() {
    return (
        <ContainerApp>
            <AppHeader>
                Electron app with auto update!
                <UpdateMessage />
            </AppHeader>
        </ContainerApp>
    )
}

export default App
