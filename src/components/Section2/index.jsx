import React, { useContext } from 'react'

import { generate } from 'shortid'

import sketch1Src from '../../sketches/sketch-1'

import { AppDispatchContext, AppStateContext } from '../App/AppStateProvider'
import p5Wrapper from '../P5Wrapper'

const P5Wrapper1 = p5Wrapper(generate())
const P5Wrapper2 = p5Wrapper(generate())

export default function Section2() {
    const dispatch = useContext(AppDispatchContext)
    const {
        slider,
        sketch1,
        sketch2,
    } = useContext(AppStateContext)

    return (
        <div className="section">
            <h5>Section #2</h5>
            <div className="section section-2-content">
                {sketch1 && (
                    <P5Wrapper1
                        dispatch={dispatch}
                        sketch={sketch1Src}
                        state={{ slider: 100 - slider }}
                    />
                )}
                {sketch2 && (
                    <P5Wrapper2
                        dispatch={dispatch}
                        sketch={sketch1Src}
                        state={{ slider }}
                    />
                )}
            </div>
        </div>
    )
}
