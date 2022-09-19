let temperatura = 0
basic.forever(function () {
    temperatura = input.temperature()
    basic.showNumber(input.temperature())
    if (input.temperature() == 10) {
        basic.showString("¡Vamos a esquiar!")
    }
    if (input.temperature() == 20) {
        basic.showString("¡Hagamos un picnic!")
    }
    if (input.temperature() == 30) {
        basic.showString("¡Vamos a la playa!")
    }
    if (input.temperature() == 40) {
        basic.showString("¡Mejor no salgas!")
    }
})
