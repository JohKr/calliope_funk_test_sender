let kanal = 7
radio.setGroup(kanal)
basic.showNumber(kanal)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
        radio.sendValue("x", input.rotation(Rotation.Pitch))
        radio.sendValue("y", input.rotation(Rotation.Roll))
    } else {
        radio.sendString("stop")
    }
})
