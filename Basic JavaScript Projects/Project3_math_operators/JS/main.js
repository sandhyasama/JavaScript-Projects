//function the leverages + (Addition) operator
function addNumbers() {
    var result = 2 + 2;
    //get paragraph element with id and change display to display the
    //result of adding two numbers with description text of result
    document.getElementById("Math").innerHTML = "2 + 2 = " + result;
}

//function the leverages of - (Substraction) operator
function subNumbers() {
    var result = 10 - 5;
    //get paragraph element with id and change display to display the
    //result of adding two numbers with description text of result
    document.getElementById("Math_Sub").innerHTML = "10 - 5 = " + result;
}

//function the leverages of * (Multiplication) operator
function multiplyNumbers() {
    var result = 10 * 5;
    //get paragraph element with id and change display to display the
    //result of adding two numbers with description text of result
    document.getElementById("Math_Mul").innerHTML = "10 * 5 = " + result;
}

//function the leverages of / (division) operator
function divideNumbers() {
    var result = 10 / 5;
    //get paragraph element with id and change display to display the
    //result of adding two numbers with description text of result
    document.getElementById("Math_Div").innerHTML = "10 / 5 = " + result;
}

//function the leverages group of arithmetic operators
function multipleArithmeticOperators() {
    var result = (100 + 50) * 10 / 2 - 56;
    //get paragraph element with id and change display to display the
    //result of adding two numbers with description text of result
    document.getElementById("Math_All").innerHTML = "100 added to 50 then multiplied by 10 then divided by 2 then substracted by 56 = " + result;
}

//function the leverages of % (Modulus)  operator
function modNumbers() {
    var result = 10 % 4;
    //get paragraph element with id and change display to display the
    //result of adding two numbers with description text of result
    document.getElementById("Math_Mod").innerHTML = "10 % 4 = " + result;
}

//function the leverages of unary  operator
function negationOperator() {
    var result = 25;
    //get paragraph element with id and change display to display the
    //result of adding two numbers with description text of result
    document.getElementById("Math_Neg").innerHTML = -result;
}

//function the leverages of increment ++  operator
function incrementOperator() {
    var result = 3;
    result++;
    //get paragraph element with id and change display to display the
    //result of adding two numbers with description text of result
    document.getElementById("Math_Increment").innerHTML = result
}

//function the leverages of decrement --  operator
function decrementOperator() {
    var result = 2;
    result--;
    //get paragraph element with id and change display to display the
    //result of adding two numbers with description text of result
    document.getElementById("Math_Decrement").innerHTML = result;
}

//function the leverages Math.random
function randomFunction() {
    var result = Math.random();
    //get paragraph element with id and change display to display the
    //result of adding two numbers with description text of result
    document.getElementById("Math_Random").innerHTML = result;
}

//function for using Math.sqrt
function numberSqrt() {
    var result = Math.sqrt(25);
    //get paragraph element with id and change display to display the
    //result of adding two numbers with description text of result
    document.getElementById("Math_Sqrt").innerHTML = result;
}