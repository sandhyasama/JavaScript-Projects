function assignVariables(){

    //create variables to simulate button click
    var test1 = "Button";
    var test2 = " Is Clicked";

    //get paragraph element from document using id
   const paragraphEl = document.getElementById("p_id");
   
   //modify paragrah element content by concatenating two variable using + operator
   paragraphEl.innerHTML = test1+test2
}
 