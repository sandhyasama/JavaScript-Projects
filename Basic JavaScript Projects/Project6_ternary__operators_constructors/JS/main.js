//Ride function
function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short" : "you are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride";
}

//voting eligibility determination function based on inputted age
function canVote() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are not old enough to vote" : "you can vote!";
    document.getElementById("Vote").innerHTML = Can_Vote;
}

//Vehicle creation function 
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored" +
        Erik.Vehicle_Model + " manfactured in " + Erik.Vehicle_Year;
}

function myNewFunction() {
    var Student = new Vehicle("Chevy", "Cruze", 2014, "Black");
    document.getElementById("New_and_This").innerHTML = "Student Drives " + Student.Vehicle_Make + " " + Student.Vehicle_Model;
}

//reserverd key word assignmnet
//var result = new;
//document.write("result variable value is = " + result);

//student object constructor
function Student(FirstName, LastName, Age) {
    this.Student_FirstName = FirstName;
    this.Student_LastName = LastName;
    this.Student_Age = Age;
}

function displayStudentInfo() {
    var student = new Student("John", "Doe", "56");
    document.getElementById("Student_Info").innerHTML = JSON.stringify(student);
}

//Nested function
function Nested_Function(){
    document.getElementById("Nested_Function").innerHTML = Display();
    function Display(){
        var result = 9;
        function Plus_One() {
            result = result + 1;
        }
        Plus_One(result);
        return result;
    }
}


