import React, { useContext } from 'react'

import { AppDispatchContext, AppStateContext } from '../App/AppStateProvider'

export default function Section1() {
    const dispatch = useContext(AppDispatchContext)
    const {
        slider,
        sketch1,
        sketch2,
        sketch3,
    } = useContext(AppStateContext)

    return (
        <div className="section">
            <h5>Section #1</h5>
            <div className="inputs-wrapper">
                <em>{slider}</em>
                <input
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    value={slider}
                    className="slider"
                    onChange={event => dispatch({
                        type: 'SET_SLIDER_VALUE',
                        payload: +event.target.value,
                    })}
                />
            </div>
            <br />
            <div className="inputs-wrapper">
                <button
                    type="button"
                    onClick={() => dispatch({
                        type: 'TOGGLE_SKETCH',
                        payload: {
                            key: 'sketch1',
                            value: !sketch1,
                        },
                    })}
                >
                    Toggle Sketch 1
                </button>
                <button
                    type="button"
                    onClick={() => dispatch({
                        type: 'TOGGLE_SKETCH',
                        payload: {
                            key: 'sketch2',
                            value: !sketch2,
                        },
                    })}
                >
                    Toggle Sketch 2
                </button>
                <button
                    type="button"
                    onClick={() => dispatch({
                        type: 'TOGGLE_SKETCH',
                        payload: {
                            key: 'sketch3',
                            value: !sketch3,
                        },
                    })}
                >
                    Toggle Sketch 3
                </button>
            </div>
        </div>
    )
}
