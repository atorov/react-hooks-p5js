import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'

import initState from './init-state'
import reducer from './reducer'

export const AppDispatchContext = createContext(() => { })
export const AppStateContext = createContext(initState)

function AppStateProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState)

    return (
        <AppDispatchContext.Provider value={dispatch}>
            <AppStateContext.Provider value={state}>
                {children}
            </AppStateContext.Provider>
        </AppDispatchContext.Provider>
    )
}

AppStateProvider.propTypes = {
    children: PropTypes.any.isRequired,
}

export default AppStateProvider
