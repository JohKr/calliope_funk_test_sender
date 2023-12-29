geschwindigkeit = 0
kanal = 2
radio.set_group(kanal)
basic.show_number(kanal)

def on_forever():
    led_y = 0
    led_x = 0
    led.toggle(led_x, led_y)
    led.unplot(led_x, led_y)
basic.forever(on_forever)
