  var message = "Hello, World from write method!";
  var alertMessage = "Hello, World!";
  var firstName = "John";
  var lastName = "Doe";
  //multiple vars at a time
  var sname="Student Name", age=23, department="IT";
  var Sent1 = "This is the beginning of the string";
  var Sent2 = " and this is the end of the string";

  //display an alert message using alert message variable usind window.alert method
  window.alert(alertMessage);
  document.write(message);

  //use backslash character to escape special characters like dobule quotes
  document.write("<br>Hello there, \" How have you been\" ");

  //concatenate two strings using plus opeartor
  document.write("<br> Full name is: "+firstName+lastName);

  //use variable inside document.write method
  document.write("<br> Student department is: "+department+"<br>");

  //expression to add two numbers
  document.write(3+3);

  //conacetnate two strings and write to document using document.write method
  document.write("<br>"+Sent1+Sent2);