//global variable declarations are outside of functions
var Z = 100;

//create local variable and use X which is not defined anywhere
//use console.log to print it to debug
function Add_Number1() {
    var Y = 25;
    console.log(X);
    document.write(20 + X);
}

Add_Number1();

//diplay greeting using built in Date 
//function with if method, enhanced it to display greeting based on the time
//leveraged if, else if and else conditional statements which fits nicely here
function Display_Greeting() {
    console.log(new Date().getHours())
    if (new Date().getHours() <= 12) {
        document.getElementById("date_display").innerHTML = "Good Morning, How are you doing today?";
    } else if (new Date().getHours() > 12 && new Date().getHours() <= 16) {
        document.getElementById("date_display").innerHTML = "Good Afternoon, How are you doing today?";
    } else {
        document.getElementById("date_display").innerHTML = "Good Evening, How are you doing today?";
    }
}

//voting eligibility determination function based on inputted age
//A person can vote if they is at least 18 or greater
function canVote() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Can_Vote = "You are old enough to vote";
    } else {
        Can_Vote = "You are not old enough to vote";
    }
    document.getElementById("Vote").innerHTML = Can_Vote;
}

//Time function using built in Date to get the time
//then based on the current hours display appropriate greeting
function Time_function() {
     var Time = new Date().getHours();
     var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!"
    } else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon"
    } else {
        Reply = "It is evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}