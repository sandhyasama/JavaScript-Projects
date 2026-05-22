//write to document to demonstrate typeof and type coercion
document.write("type of \"test\" "+typeof "test");
document.write("<br>");
document.write("adding number 10 with \"5\""+"= "+ 10+"5");
document.write("<br>");
document.write("divide 0 by 0 "+ 0/0);
document.write("<br>");

//write to document to demonstrate isNAN demonstration
document.write("Is \"Hello\" not a number ?="+isNaN("Hello"));
document.write("<br>");
document.write("Is 3 not a number? "+isNaN(3));
document.write("<br>");

//write to document to display exponential value
document.write("what is 2 to the exponent 0f 310 ? = "+2E310);
document.write("<br>");
document.write("what is -3 to the exponent 0f 310 ? = "+-3E310);
document.write("<br>");

//write to document to display comparison operators
var is10LessThan2 = 10 < 2;
document.write("Is 10 less than 2 = "+ is10LessThan2);
document.write("<br>");
var is3GreatherThan2 = 3 > 2;
document.write("Is 3 high than  2 = "+is3GreatherThan2);
document.write("<br>");

//write to document to demonstrate the usage of triple equal sign
var IsEqualDataAndType = 10 === 10;
document.write("Is number 10 equals number 10 = "+IsEqualDataAndType);
document.write("<br>");
var IsNotEqualDataAndDifferentType = "10" === 11;
document.write("Is number \"10\" equals number 11 = "+IsNotEqualDataAndDifferentType);
document.write("<br>");
var IsNotEqualDataAnEqualType = "10" === 10;
document.write("Is number \"10\" equals number 10 = "+IsNotEqualDataAnEqualType);
document.write("<br>");
var isNotEqualSameType = 11 === 12;
document.write("Is number 11 equals number 12 = "+isNotEqualSameType);

//AND Boolean Logical operator (if two conditions are true then true otherwise false)
document.write("<br>");
var whatIsTrueAndTrue = true && true;
document.write("true and true is = "+whatIsTrueAndTrue);
document.write("<br>");
var whatISTrueAndFalse = true && false;
document.write("true and false is = "+whatISTrueAndFalse);

//OR Boolean Logical operator (if any the condition is true it is true otherwise false)
document.write("<br>");
var whatIsFalseOrFalse = false || false;
document.write("false or false is = "+whatIsFalseOrFalse);
document.write("<br>");
var whatISTrueOrFalse = true || false;
document.write("true or false is = "+whatISTrueOrFalse);

//NOT Boolean Logical operator (negates the resulting condition, if true then false, if false then true, reverses it)
document.write("<br>");
var whatIsNotFalse = !false;
document.write("not false = "+whatIsNotFalse);
document.write("<br>");
var whatIsNotTrue = !true;
document.write("not true = "+whatIsNotTrue);






//console.log usage
console.log( 2 + 2)
console.log(10 < 2);
console.log(10 == 10);
console.log(12 == 11);

//handler method to show positive infinity
function calcPositiveInfinity(){
    document.getElementById("positive_infinity").innerHTML=3E310;
}

//handler method to show negative infinity
function calcNegativeInfinity(){
    document.getElementById("negative_infinity").innerHTML=-3E310;
}