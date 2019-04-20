import {
    drawBezier,
    drawFloatingText,
} from './lib'

export default function (s) {
    s.props = {}

    s.setup = function() {
        s.createCanvas(900, 300)
    }

    s.draw = function() {
        s.background(255)
        const noiseX = s.noise(s.frameCount / 150.0) * s.props.slider
        const noiseY = s.noise((s.frameCount + 1000) / 150.0) * s.props.slider

        const coordX1 = s.map(noiseX, 5, 290, 50, s.width / 2 - 50)
        const coordY1 = s.map(noiseY, 5, 290, 20, s.height - 20)
        drawFloatingText(s, coordX1, coordY1)

        const coordX2 = s.map(noiseX, 5, 290, s.width - 50, s.width / 2 + 50)
        const coordY2 = s.map(noiseY, 5, 290, s.height - 20, 20)
        drawFloatingText(s, coordX2, coordY2)

        drawBezier(s, coordX1, coordY1, coordX2, coordY2)
    }
}
