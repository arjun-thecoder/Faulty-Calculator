let random = Math.random()
let a = prompt("Enter First Number")
let c = prompt("Enter Opration")
let b = prompt("Enter Second Number")


let obj ={
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",

}

if (random > 0.1){
    alert(`The result is = ${eval(`${a} ${c} ${b}`)}`)
}

else{
    c = obj[c]
    alert(`The result is = ${eval(`${a} ${c} ${b}`)}`)

}