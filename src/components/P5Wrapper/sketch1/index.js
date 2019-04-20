export default function (s) {
    s.props = {}
    s.onSetAppState = () => {}

    s.setup = function() {
        s.createCanvas(900, 300)
        console.log('::: displayDensity:', s.displayDensity())
        console.log('::: pixelDensity:', s.pixelDensity())
    }

    s.draw = function() {
        if (s.frameCount % 60 === 1) {
            s.onSetAppState({ frameRate: s.frameRate().toFixed(1) })
        }

        s.background(127, 0, 50)
        const weight = s.map(s.props.slider, 5, 290, 0, 10)
        s.strokeWeight(weight)
        s.stroke(127, 255, 205)
        const alpha = s.map(s.props.slider, 5, 290, 255, 0)
        s.fill(127, 255, 205, alpha)
        s.ellipse(s.width / 2, s.height / 2, s.props.slider)
    }
}
