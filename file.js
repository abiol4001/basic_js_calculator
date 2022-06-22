var firstNum = parseInt(prompt("Input your first number"))
var operation = prompt("Input operator +, -, *, /")
var secondNum = parseInt(prompt("Input your second number"))

if (operation == "+") {
    console.log(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
}
else if (operation == "-") {
    console.log(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`)
}
else if (operation == "*") {
    console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`)
}
else if (operation == "/") {
    console.log(`${firstNum} / ${secondNum} = ${firstNum / secondNum}`)
}
else {
    console.log("Operation cant be found!")
}
