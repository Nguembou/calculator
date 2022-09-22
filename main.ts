input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    balls += 1
    basic.showNumber(balls)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(balls)
    basic.showNumber(strike)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        `)
    strike += 1
    basic.showNumber(strike)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    strike = 0
    balls = 0
})
let strike = 0
let balls = 0
basic.showIcon(IconNames.Heart)
basic.showNumber(0)
basic.forever(function () {
	
})
