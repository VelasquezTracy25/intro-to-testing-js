// helloWorld function
function helloWorld() {
    return "Hello, World!";
}

// function isEven(param) {
//     if (param === 10) {
//         return true
//     } else {
//         return false;
//     }
// }

function sayHello(name) {
    if (typeof name === 'boolean') {
        return "Hello, World!"
    }if (typeof name == 'undefined') {
        return "Hello, World!"
    }if (typeof name == "number") {
        return "Hello, World!";
    }if (typeof name == "object") {
        return "Hello, World!";
    }if (name === "") {
        return "Hello, World!";
    } else {
        return "Hello, " + name + "!";
    }
}

console.log(sayHello(2.3))
console.log(sayHello(null))
console.log(sayHello(""))
console.log(sayHello("5"))
console.log(sayHello([1,2,3,4,5]))

function isFive(number) {
return number == 5
}

console.log(isFive("5"))
console.log(isFive(5))
console.log(isFive("haha"))

function isEven(number) {
    return (parseInt(number) % 2 === 0);
}
console.log("number tests")
console.log(isEven(2))
console.log(isEven(-4))
console.log(isEven(3))
console.log(isEven("banana"))
console.log(isEven("8"))
console.log(isEven(Infinity))
console.log(isEven(true))
console.log(isEven(false))
console.log(isEven())







