//loop through from 1 to 10 and build the digit
//content with breaks until while conditions is satisfied
function call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit = Digit + "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//length property gives total length of characters in a string
function get_string_length() {
    var greeting = "Hello";
    //access length propery of a string to get length 
    var result = greeting.length;
    document.getElementById("string_length").innerHTML = result;
}

//instruement list with foor loop
var Instruements = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    //loop through each instruement, add instruement to the content and br so that each 
    //instruement will be displayed one below another
    for (Y = 0; Y < Instruements.length; Y++) {
        Content = Content + Instruements[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//array with in a function
function array_Function() {
    var StudentList = [];
    //add students to array using indices directly
    StudentList[0] = "John Doe";
    StudentList[1] = "Bob Fung";
    StudentList[2] = "Sam Fung";
    StudentList[3] = "Rob Fung";
    //display student at index 1 which is Bob Fung to the document
    document.getElementById("Array").innerHTML = "Second student name from the list is = " + StudentList[1];
}

//constant function
function constant_Function() {
    const Student = { firstName: "John", lastName: "Doe", Age: 34 };
    Student.major = "CSE";
    Student.status = "Active";
    document.getElementById("Constant").innerHTML = "Student Major is  " + Student.major + " registration Status is = "
        + Student.status;
}

//let (blocked scope variable declaration) keyword
function let_Function() {
    let greeting = "Hello";
    //access length propery of a string to get length 
    var result = greeting.length;
    document.getElementById("Let").innerHTML = result;
}

//returns hello world greeting
function returnGreeting(){
    return "Hello, World!";
}

//return function usage
function return_Function() {
    document.getElementById("Return").innerHTML = returnGreeting();
}

//object creation using let keyword
//invoke object method to get some sort of decription
function object_let_Function(){
    let student = {
        firstName: "John ",
        lastName: "Doe ",
        age: 34,
        loves: "Pan Cakes",
        //method (Not a function since it is inside an object)
        studentDescription: function (){
            return this.firstName.concat(this.lastName).concat("Aged ")
            .concat(this.age)+ " loves "+this.loves;
        }
    }
    document.getElementById("Object_Let").innerHTML = student.studentDescription();
}


//Break keyword, break after index 4 i.e index > 4 break the loop
function break_Function() {
    let Digit = "";
    for(i = 1; i <= 10; i++){
        //index 5 is greater than 5 so it should break this loop
        if(i > 4){
            break; //control wil break out of the loop as if an condition is met to break the loop
        }
         Digit = Digit + "<br>" + i;
    }
    document.getElementById("Break").innerHTML = Digit;
}

//continue keyword, used to skip the current iteration
function continue_Function() {
    let Digit = "";
    for(i = 1; i <= 10; i++){
        //an even number divided by 2 should give 0 reminder
        //modulus operator can help with this
        //if it is then skip that iteration
        //so we should end up getting only add number
        if(i % 2 == 0){
            continue;
        }
         Digit = Digit + "<br>" + i;
    }
    document.getElementById("Continue").innerHTML = Digit;
}