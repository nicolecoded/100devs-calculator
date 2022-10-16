function Calculator() {
    // numbers
    let zero = document.querySelector('#zero')
    let decimal = document.querySelector('#decimal')
    let equals = document.querySelector('#equals')
    let subtract = document.querySelector('#subtract')
    let one = document.querySelector('#one')
    let two = document.querySelector('#two')
    let three = document.querySelector('#three')
    let add = document.querySelector('#add')
    let four = document.querySelector('#four')
    let five = document.querySelector('#five')
    let six = document.querySelector('#six')
    let multiply = document.querySelector('#multiply')
    let seven = document.querySelector('#seven')
    let eight = document.querySelector('#eight')
    let nine = document.querySelector('#nine')
    let divide = document.querySelector('#divide')

    let screen = document.querySelector('.screen')
    let total = 0
    let numberOnScreen = 0
    
    this.zeroToScreen = function() {
        total = 0
        numberOnScreen = 0
        screen.innerText = numberOnScreen
    }

    this.oneToScreen = function() {
        total 
        total += 1
        numberOnScreen = 1
        screen.innerText = numberOnScreen
    }

    this.twoToScreen = function() {
        total += 2
        numberOnScreen = 2
        screen.innerText = numberOnScreen
    }

    this.threeToScreen = function() {
        total += 3
        numberOnScreen = 3
        screen.innerText = numberOnScreen
    }

    this.divideOnScreen = function() {
        total = screen.innerText
        total 
    }

    zero.addEventListener('click', this.zeroToScreen)
    one.addEventListener('click', this.oneToScreen)
    two.addEventListener('click', this.twoToScreen)
    three.addEventListener('click', this.threeToScreen)
    divide.addEventListener('click', this.divideOnScreen)

}

// this.zeroToScreen = function() {
//     total = 0
//     screen.innerText = total
// }

// zero.addEventListener('click', this.zeroToScreen)

const calc = new Calculator

