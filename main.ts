input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    geschwindgkeit_0 = 0
    geschwindigkeit = 0
    led_x_wert = 0
    led_y_wert = 0
    richtung = 0
    x_achse = 0
    y_achse = 0
    schalter = 1
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    schalter = 0
})
let y_achse = 0
let x_achse = 0
let richtung = 0
let led_y_wert = 0
let led_x_wert = 0
let geschwindigkeit = 0
let geschwindgkeit_0 = 0
let schalter = 0
schalter = 0
radio.setGroup(1)
radio.setTransmitPower(7)
geschwindgkeit_0 = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (schalter == 1) {
        led.unplot(led_x_wert, led_y_wert)
        x_achse = pins.map(
        input.acceleration(Dimension.X),
        -1023,
        1023,
        -50,
        50
        )
        richtung = x_achse
        y_achse = pins.map(
        input.acceleration(Dimension.Y),
        1023,
        -1023,
        0,
        100
        )
        geschwindigkeit = y_achse
        led_x_wert = pins.map(
        richtung,
        -50,
        50,
        0,
        5
        )
        led_y_wert = pins.map(
        geschwindigkeit,
        0,
        100,
        5,
        0
        )
        led.plot(led_x_wert, led_y_wert)
        radio.sendValue("geschwindigkeit", geschwindigkeit)
        radio.sendValue("richtung", richtung)
    } else {
        radio.sendValue("geschwindigkeit", geschwindgkeit_0)
        radio.sendValue("richtung", geschwindgkeit_0)
        basic.showIcon(IconNames.No)
    }
})
