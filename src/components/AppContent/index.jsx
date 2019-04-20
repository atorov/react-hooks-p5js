import React from 'react'

// import { AppDispatchContext, AppStateContext } from '../App/AppStateProvider'
import Section1 from '../Section1'
import Section2 from '../Section2'
// import Section3 from '../Section3'

export default function AppContent() {
    // const appDispatch = useContext(AppDispatchContext)
    // const appState = useContext(AppStateContext)

    return (
        <div className="app-content section">
            <h5>App content</h5>
            <Section1 />
            <Section2 />
            {/* <Section3 /> */}
        </div>
    )
}
