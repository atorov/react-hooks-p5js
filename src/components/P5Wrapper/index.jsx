import React, { memo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import { generate } from 'shortid'

export default function (id = generate()) {
    let canvas = null

    function P5Wrapper({
        sketch = () => { },
        state = {},
        dispatch = () => { },
    }) {
        console.log(`::: P5Wrapper(${id}) component has been re-rendered`)

        const sketchContainer = useRef(null)

        useEffect(() => {
            console.log(`::: P5Wrapper(${id})/useEffect()`)
            canvas = new window.p5(sketch, sketchContainer.current)
            canvas.state = state
            canvas.dispatch = dispatch

            return () => {
                console.log(`::: P5Wrapper(${id})/useEffect.return()`)
                canvas.remove()
            }
        }, [dispatch, sketch, state])

        return (
            <div ref={sketchContainer} className="section">
                <h5>{`P5Wrapper #${id}`}</h5>
            </div>
        )
    }

    P5Wrapper.propTypes = {
        state: PropTypes.object,

        dispatch: PropTypes.func,
        sketch: PropTypes.func,
    }

    P5Wrapper.defaultProps = {
        state: {},

        dispatch: () => { },
        sketch: () => { },
    }

    return memo(P5Wrapper, (_, nextProps) => {
        canvas.state = { ...nextProps.state }

        return true
    })
}
