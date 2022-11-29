// Declare the myGlobal variable below this line
const myGlobal = 10

function fun1() {
    // Assign 5 to oopsGlobal Here
    const oopsGlobal = 5
}

// Only change code above this line

function fun2() {
    oopsGlobal = 5
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun2()