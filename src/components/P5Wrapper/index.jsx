import React, { memo, useEffect } from 'react'
import PropTypes from 'prop-types'

export default function (id) {
    let canvas = null

    function P5Wrapper({ sketch, dispatch, state }) {
        console.log(`::: P5Wrapper(${id}) component has been re-rendered`)

        const elementId = `p5-wrapper-${id}`

        useEffect(() => {
            canvas = new window.p5(sketch, elementId)
            canvas.dispatch = dispatch
            canvas.state = { ...state }

            return () => canvas.remove()
        }, [dispatch, elementId, sketch, state])

        return (
            <div id={elementId} className="section">
                <h5>{`P5Wrapper #${id}`}</h5>
            </div>
        )
    }

    P5Wrapper.propTypes = {
        dispatch: PropTypes.func,
        sketch: PropTypes.func,
        state: PropTypes.object,
    }

    P5Wrapper.defaultProps = {
        dispatch: () => { },
        sketch: () => { },
        state: {},
    }

    return memo(P5Wrapper, (_, nextProps) => {
        canvas.state = { ...nextProps.state }

        return true
    })
}
