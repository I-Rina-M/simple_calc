

let num1 = 8
let num2 = 2

let showResult = document.getElementById('result-el')

function add(){
	showResult.innerText = "Sum: "+" "+(num1+num2)
}

function subtract(){
	showResult.innerText = "Difference: "+" "+(num1-num2)
}

function multiply() {
	showResult.innerText = "Product: "+" "+(num1*num2)
}

function divide() {
	showResult.innerText =  "Quotient: "+" "+(num1/num2)
}