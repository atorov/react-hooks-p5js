import React, { useContext } from 'react'

import { generate } from 'shortid'

import sketch2Src from '../../sketches/sketch-2'

import { AppDispatchContext, AppStateContext } from '../App/AppStateProvider'
import p5Wrapper from '../P5Wrapper'

const P5Wrapper = p5Wrapper(generate())

export default function Section31() {
    const dispatch = useContext(AppDispatchContext)
    const { sketch2 } = useContext(AppStateContext)

    return (
        <div className="section">
            <h5>Section #31</h5>
            <em>Select a color</em>
            <div className="section section-content">
                {sketch2 && (
                    <P5Wrapper
                        dispatch={dispatch}
                        sketch={sketch2Src}
                    />
                )}
            </div>
        </div>
    )
}
