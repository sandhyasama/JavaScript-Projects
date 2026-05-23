//concatenate two or more strings using String built in concat method
function concat_all_strings(){
    var string1 = "John ";
    var String2 = "Doe ";
    var String3 = "Likes ";
    var String4 ="Pan Cakes";
    var all_strings_combined = string1.concat(String2, String3, String4);
    document.getElementById("concatenate_strings").innerHTML = all_strings_combined;
}

//slice a string using String built in slice method
function slice_string(){
    var sentence = "John Doe Likes Pan Cakes";
    //slice method takes starting index start the slice  and ending index to end the slice 
    var sliced_sentence = sentence.slice(5, 8); //should bring Doe as index starts with 0
    document.getElementById("sliced_string").innerHTML = sliced_sentence;
}

//toUppercase method
function to_uppercase(){
    var fullName = "John Doe";
    var result = fullName.toLocaleUpperCase();
    document.getElementById("uppercase").innerHTML = result;
}

//search method, search returns the first occurence of a string in the sentence
function search_string(){
    var sentence = "John Doe Likes Pan Cakes";
    var result = sentence.search("Doe");
    var result_sentence = "First occurence of Doe is = "+result;
    document.getElementById("search").innerHTML = result_sentence;
}

//toString method on a number
function string_from_number(){
    var num = 100;
    //convert the number 100 to string form "100"
    var num_string = num.toString();
    document.getElementById("num_to_string").innerHTML = num_string;
}

//toPrecision, formats the number to a specified length
function precise_the_number(){
    var num = 1234442.2323232;
    var precised_number_to_10 = num.toPrecision(10);
    document.getElementById("precision_num").innerHTML = precised_number_to_10;
}

//toFixed method rounds the decimal places by fixed number places supplied to toFixed method
function round_the_decimal_places(){
    var num = 123.456;
    //instructing to round it to two integers after decimal
    var result = num.toFixed(2);
    document.getElementById("to_fixed").innerHTML = result;
}

//toFixed method rounds the decimal places by fixed number places supplied to toFixed method
function round_the_decimal_places(){
    var num = 123.456;
    //instructing to round it to two integers after decimal
    var result = num.toFixed(2);
    document.getElementById("to_fixed").innerHTML = result;
}

//valueOf method returns the primitive value of a string
function get_value_of(){
    var text = "Hello, World!"
    var result = text.valueOf();
    document.getElementById("value_of").innerHTML = result;
}

//valueOf expirement to see what student object valueOf prints
function Student(firstName, lastName, age){
    this.Student_firstName =  firstName;
    this.Student_lastName = lastName;
    this.Student_age = age;
}

var student = new Student("John", "Doe", 34);
var result = student.valueOf(); //prints [object Object]
document.write("valueOf student is "+ (result));