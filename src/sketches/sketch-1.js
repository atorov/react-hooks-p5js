export default function (s) {
    s.state = {}
    // s.dispatch = () => { }

    s.setup = () => {
        s.createCanvas(150, 150)

        // console.log('::: displayDensity:', s.displayDensity())
        // console.log('::: pixelDensity:', s.pixelDensity())

        console.log('::: sketch-1 has been initialized')
    }

    s.draw = () => {
        s.background(127, 0, 50)
        s.strokeWeight(s.map(s.state.slider, 0, 100, 0, 10))
        s.stroke(127, 255, 205)
        s.fill(127, 255, 205, s.map(s.state.slider, 0, 100, 255, 0))
        s.ellipse(s.width / 2, s.height / 2, s.state.slider)
    }
}
