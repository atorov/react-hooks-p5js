export function drawBezier(s, x1, y1, x2, y2) {
    s.noStroke()
    s.fill(127, 0, 50, 31)
    s.bezier(
        x1, y1,
        s.width / 2 - s.props.slider * 2, s.height / 2 - s.props.slider,
        s.width / 2 + s.props.slider * 2, s.height / 2 + s.props.slider,
        x2, y2
    )
}

export function drawFloatingText(s, rx, ry) {
    s.noStroke()
    s.fill(127, 0, 50, 191)
    s.ellipse(rx, ry, 8, 8)

    s.textAlign(s.CENTER);
    s.textSize(12)
    s.text(`(${s.round(rx)}, ${s.round(ry)})`, rx, ry + 16)
}
