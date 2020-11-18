input.onButtonPressed(Button.A, function () {
    m_pesoact = m_pesoact + 1
    basic.showNumber(m_pesoact)
    basic.pause(500)
})
input.onGesture(Gesture.Shake, function () {
    m_pesoact = 74
    imc = 0
})
input.onButtonPressed(Button.AB, function () {
    imc = 10000 * m_pesoact / (m_estatura * m_estatura)
    basic.showNumber(imc)
    basic.pause(500)
    if (imc < 18.5) {
        basic.showLeds(`
            . # # . .
            . # . # .
            . # . # .
            . # . # .
            . # # . .
            `)
        basic.pause(500)
        basic.clearScreen()
    } else {
        if (imc > 30) {
            basic.showLeds(`
                . . # . .
                . # . # .
                . # . # .
                . # . # .
                . . # . .
                `)
            basic.pause(500)
            basic.clearScreen()
        } else {
            if (imc > 25 && imc <= 30) {
                basic.showLeds(`
                    . . # # .
                    . # . . .
                    . # # # .
                    . . . # .
                    . # # . .
                    `)
                basic.pause(500)
                basic.clearScreen()
            } else {
                basic.showIcon(IconNames.Yes)
                basic.pause(500)
                basic.clearScreen()
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    m_pesoact = m_pesoact - 1
    basic.showNumber(m_pesoact)
    basic.pause(500)
})
let imc = 0
let m_pesoact = 0
let m_estatura = 0
m_estatura = 180
m_pesoact = 74
imc = 0
basic.showNumber(m_pesoact)
basic.pause(5000)
