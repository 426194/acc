input.onButtonPressed(Button.A, function () {
    if (x > 0) {
        y3 = x - 1
    }
    led.plot(x, y)
    led.unplot(x + 1, y)
})
input.onButtonPressed(Button.AB, function () {
    x2 = x
    y2 = y
    for (let index = 0; index < 5; index++) {
        y2 = y2 - 1
        led.plot(x2, y2)
        led.unplot(x2, y2 + 1)
        led.plot(x, y)
        basic.pause(50)
    }
})
input.onButtonPressed(Button.B, function () {
    if (x < 4) {
        x = x + 1
    }
    led.plot(x, y)
    led.unplot(x - 1, y)
})
let y2 = 0
let x2 = 0
let x3 = 0
let y = 0
let x = 0
let y3 = 0
y3 = 0
y3 = 0
y3 = 0
y3 = 0
y3 = 0
y3 = 0
led.plot(x, y)
led.plot(x3, y3)
basic.forever(function () {
    y3 = randint(0, 4)
    led.plot(x3, y3)
    basic.pause(2000)
    led.unplot(x3, y3)
})
