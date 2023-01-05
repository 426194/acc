input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.acceleration(Dimension.X))
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.acceleration(Dimension.Z))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.acceleration(Dimension.Y))
})
let x = 2
let y = 2
led.plot(x, y)
basic.forever(function () {
	
})
