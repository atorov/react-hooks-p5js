export default function (s) {
    s.state = {}
    s.dispatch = () => { }

    let imgBgnd
    let imgPauseBtn
    let imgPlayBtn

    s.preload = () => {
        imgBgnd = s.loadImage('img/audio-bgnd.jpg')
        imgPauseBtn = s.loadImage('img/pause-btn.svg')
        imgPlayBtn = s.loadImage('img/play-btn.svg')

        s.soundFormats('mp3')
        s.mySound = s.loadSound('audio/bensound-acoustic-breeze.mp3')
    }

    s.setup = () => {
        s.createCanvas(320, 240)

        s.mySound.setLoop(true)
    }

    s.draw = () => {
        const { playAudio } = s.state

        s.imageMode(s.CORNER)
        s.image(imgBgnd, 0, 0, s.width, s.height)

        s.tint(255, 127)
        s.imageMode(s.CENTER)
        if (playAudio) {
            s.image(imgPlayBtn, s.width / 2, s.height / 2)

            s.stroke(255, 127)
            s.strokeWeight(1)
            for (let index = 0; index < s.width; index += 4) {
                const height = 100 * s.noise((s.frameCount + index) / 10)
                const y1 = s.height * 2 / 3 - height / 2
                const y2 = s.height * 2 / 3 + height / 2
                s.line(index, y1, index, y2)
            }
        }
        else {
            s.image(imgPauseBtn, s.width / 2, s.height / 2)
            s.filter(s.GRAY)
        }
    }

    s.mouseClicked = () => {
        const { playAudio } = s.state

        if (s.mouseX > 0 && s.mouseX < s.width && s.mouseY > 0 && s.mouseY < s.height) {
            if (playAudio) {
                s.mySound.pause()
            }
            else {
                s.mySound.setVolume(0.1)
                s.mySound.play()
            }

            s.dispatch({ type: 'TOGGLE_PLAY_AUDIO' })
        }
    }
}
