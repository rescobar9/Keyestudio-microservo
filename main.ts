led.enable(false)
pins.servoWritePin(AnalogPin.P3, 0)
basic.pause(100)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P3, 0)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P3, 90)
    basic.pause(1000)
})
