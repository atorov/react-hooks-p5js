import React, { useContext } from 'react'

import { generate } from 'shortid'

import sketchSoundSrc from '../../sketches/sketch-sound'

import { AppDispatchContext, AppStateContext } from '../App/AppStateProvider'
import p5Wrapper from '../P5Wrapper'

const P5Wrapper = p5Wrapper(generate())

export default function Section4() {
    const dispatch = useContext(AppDispatchContext)
    const {
        playAudio,
        sketchAudio,
    } = useContext(AppStateContext)

    return (
        <div className="section">
            <h5>Section #4</h5>
            <em>
                {playAudio ? 'Playing audio...' : 'Audio is stopped'}
            </em>
            <div className="section section-content">
                {sketchAudio && (
                    <P5Wrapper
                        dispatch={dispatch}
                        sketch={sketchSoundSrc}
                        state={{ playAudio }}
                    />
                )}
            </div>
        </div>
    )
}
